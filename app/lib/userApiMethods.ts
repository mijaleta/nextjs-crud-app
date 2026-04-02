// API namespace for user CRUD operations

export const userApiMethods = {
  fetchUsers: async () => {
    const res = await fetch("/api/users");
    if (!res.ok) throw new Error("Failed to fetch users");
    return res.json();
  },

  createUser: async (name: string, email: string) => {
    const res = await fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email }),
    });
    if (!res.ok) throw new Error("Failed to create user");
    return res.json();
  },

  updateUser: async (id: number, name: string, email: string) => {
    const res = await fetch("/api/users", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, name, email }),
    });
    if (!res.ok) throw new Error("Failed to update user");
    return res.json();
  },

  deleteUser: async (id: number) => {
    const res = await fetch(`/api/users?id=${id}`, {
      method: "DELETE",
    });
    if (!res.ok) throw new Error("Failed to delete user");
    return res.json();
  },
};