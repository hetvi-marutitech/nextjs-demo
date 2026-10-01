export async function login() {
  await fetch("/api/login", {
    method: "POST",
  });

  window.location.href = "/students";
}
