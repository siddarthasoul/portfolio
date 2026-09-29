import { projects, type Project } from "../../data/projects.js"
import { ApiError } from "../../utils/errer.js";

class Projects {
    async getProject(): Promise<Project[]> {
        if (!projects || projects.length === 0) {
            throw new ApiError(404, "projects not found");
        }
        return projects;
    }
}

export default new Projects();