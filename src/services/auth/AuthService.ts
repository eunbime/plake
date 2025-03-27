class AuthService {
  async getUser() {
    const res = await fetch("/api/user");
    if (!res.ok) throw await res.json();
    return res.json();
  }

  async updateUser(formData: FormData) {
    const res = await fetch("/api/user/update", {
      method: "PUT",
      body: formData,
    });

    if (!res.ok) throw await res.json();
    return res.json();
  }
}

export default new AuthService();
