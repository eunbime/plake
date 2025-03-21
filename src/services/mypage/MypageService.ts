import Service from "@/services/Service";
import { IMyGathering } from "@/types/gathering";

class MypageService extends Service {
  constructor() {
    super();
    this.setToken("");
  }

  updateProfile() {
    const data = this.http.put("/auths/user", {});
    return data;
  }
  getMyGatheringList() {
    const data = this.http.get<IMyGathering[]>("/gatherings/joined");
    return data;
  }
}

const mypageService = new MypageService();

export default mypageService;
