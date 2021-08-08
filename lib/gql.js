import axios from "axios";

axios.defaults.headers.common[
	"Authorization"
] = `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`;

const url = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`;

const GET_ALL_DATA = `
query{
	cityCollection{
    items{
      sys{
        id
      }
      location
      distance
      image
    }
  }
  amenityCollection{
    items{
      sys{
        id
      }
      title
      image
    }
  }
}
`;

const getSearchResults = noOfGuests => `
    query{
        innCollection(where:{guests:${noOfGuests}}) {
    total
    items {
      sys{
        id
      }
      title
      coordinates {
        lat
        lon
      }
      image
      rating
      description
      price
      total
      location
      guests
    }
  }
    }
`;

export const getAllData = async () => {
	const { data } = await axios.post(url, { query: GET_ALL_DATA });
	const {
		cityCollection: { items: cities },
		amenityCollection: { items: amenities },
	} = data.data;
	return { cities, amenities };
};

export const getAllInns = async noOfGuests => {
	const { data } = await axios.post(url, {
		query: getSearchResults(noOfGuests),
	});
	const {
		innCollection: { total, items: inns },
	} = data.data;

	return { inns, total };
};
