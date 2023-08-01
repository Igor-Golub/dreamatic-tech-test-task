import { IAllRates, IConvert, IConvertParameters } from "../interfaces";
import { axios } from "../client";
import dayjs from "dayjs";

class FixerAPI {
  async getData(): Promise<IAllRates> {
    const { data } = await axios.get<IAllRates>("latest");

    return data;
  }
}

export default new FixerAPI();
