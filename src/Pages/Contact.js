export default function Contact() {
  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h2>Contact Us</h2>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        <label className="label-control">Custemer Name</label>
        <input
          className="form-control"
          type="text"
          placeholder="Enter your  name..."
          required
        />
        <label htmlFor="email">Email: </label>
        <input
          className="form-control"
          type="email"
          placeholder="Enter your email..."
          name="email"
          required
        />
        <label>Message: </label>
        <textarea placeholder="Enter your message..." required></textarea>
        <button
          type="submit"
          style={{
            backgroundColor: "#00ff11ff",
            color: "white",
            padding: "10px",
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
}
