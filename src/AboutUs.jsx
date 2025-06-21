function AboutUs() {
  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "3rem" }}>About Us</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          gap: "30px",
        }}
      >
        <p style={{ fontSize: "1.8rem", textAlign: "justify" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          repellendus natus laborum eligendi non sequi rerum quo accusamus
          voluptate. Voluptatum perferendis, sit expedita nam commodi autem,
          voluptates ex assumenda aperiam accusamus rerum harum suscipit
          explicabo recusandae nobis minus dicta. Eaque non, sed commodi
          accusamus ipsa minima dicta eos praesentium ipsam consequuntur magnam
          expedita aperiam odio suscipit mollitia corrupti, vel est?
        </p>
        <img
          src="https://img.freepik.com/free-photo/no-people-call-center-helpdesk-with-multiple-monitors-office-customer-service-client-support-telecommunication-nobody-working-telemarketing-assistance-with-helpline-contact_482257-44008.jpg?ga=GA1.1.479012527.1750472075&semt=ais_hybrid&w=740"
          alt="About Us"
          style={{ width: "100%" }}
        />
      </div>
    </div>
  );
}

export default AboutUs;
