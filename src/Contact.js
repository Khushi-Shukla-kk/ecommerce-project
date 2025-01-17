import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">Contact page</h2>;

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28039.294126900215!2d77.11815727431637!3d28.542371700000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1dce96eb3acd%3A0xd39b01d0a6ebd44f
             !2sDLF%20Promenade!5e0!3m2!1sen!2sin!4v1725803115150!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>

      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xqazjnjp"
            method="POST"
            className="contact-inputs">
            <input type="text"
              placeholder="username"
              name="username"
              required autoComplete="off"
            />

            <input
              type="emal"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea name="Message"
              cols="30"
              rows="10"
              autoComplete="off"
              placeholder="Enter you message"></textarea>

            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
