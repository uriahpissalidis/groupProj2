import axios from "axios";

const API_URL = "/api/availabilities";

//create new availability
const createAvailability = async (availabilityData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, availabilityData, config);

  return response.data;
};

// Get user goals
const getAvailabilities = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

// Delete user availability
const deleteAvailability = async (availabilityId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + availabilityId, config);

  return response.data;
};

const availabilityService = {
  createAvailability,
  getAvailabilities,
  deleteAvailability,
};

export default availabilityService;
