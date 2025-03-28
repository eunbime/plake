class AuthService {
  async getUser() {
    const res = await fetch("/api/auths/user");
    if (!res.ok) throw await res.json();
    return res.json();
  }

  async updateUser(formData: FormData) {
    const res = await fetch("/api/auths/user", {
      method: "PUT",
      body: formData,
    });

    if (!res.ok) throw await res.json();
    return res.json();
  }
}

const authService = new AuthService();

export default authService;
