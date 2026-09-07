export const users = [
  {
    id: 1,
    username: "admin",
    password: "admin123",
    role: "Admin",
  },
  {
    id: 2,
    username: "editor",
    password: "editor123",
    role: "Editor",
  },
  {
    id: 3,
    username: "viewer",
    password: "viewer123",
    role: "Viewer",
  },
];

export const createToken = (user) => {
  const header = btoa(JSON.stringify({ alg: "HS256", typ: "JWT" }));

  const payload = btoa(
    JSON.stringify({
      id: user.id,
      username: user.username,
      role: user.role,
      iat: Date.now(),
    })
  );

  const signature = btoa("mock-signature");

  return `${header}.${payload}.${signature}`;
};

export const decodeToken = (token) => {
  try {
    const parts = token.split(".");

    if (parts.length !== 3) {
      return null;
    }

    return JSON.parse(atob(parts[1]));
  } catch {
    return null;
  }
};

export const getStoredUser = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    return null;
  }

  return decodeToken(token);
};