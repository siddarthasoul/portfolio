import { portfolioData, type PortfolioData } from "../../data/me.js";
import { ApiError } from "../../utils/errer.js"

class Me {
  async getInfo(): Promise<PortfolioData> {
    if (!portfolioData) {
      throw new ApiError(404, "portfolioData not found");
    }
    return portfolioData;
  }
}

export default new Me();