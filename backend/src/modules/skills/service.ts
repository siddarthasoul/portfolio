import { skills, type SkillCategory } from "../../data/skills.js";
import { ApiError } from "../../utils/errer.js";

class SkillsService {
  async getSkills(): Promise<SkillCategory[]> {
    if (!skills || skills.length === 0) {
      throw new ApiError(404, "Skills not found");
    }

    return skills;
  }
}

export default new SkillsService();