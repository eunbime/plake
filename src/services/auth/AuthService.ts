import { ApiRouteService } from "@/services/Service";

class AuthService extends ApiRouteService {
  async getUser() {
    return this.http.get("/auths/user");
  }

  async updateUser(formData: FormData) {
    return this.http.put("/auths/user", formData);
  }
}

const authService = new AuthService();

export default authService;
