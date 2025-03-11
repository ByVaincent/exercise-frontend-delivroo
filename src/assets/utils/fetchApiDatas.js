import axios from "axios";

const fetchDatas = async () => {
  try {
    const response = await axios.get(
      "https://site--backend-deliveroo-exercise--t2qjkc2tpc24.code.run/datas"
    );

    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

export default fetchDatas;
