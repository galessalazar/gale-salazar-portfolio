
const Contact = () => {
    return (
        <section id='contact'>
            <form>
                <label>
                    Name:
                    <input type='text' name='name' required />
                </label>
                <label>
                    Email: 
                    <input type='email' name='email' required/>
                </label>
                <label>
                    Message:
                    <textarea name="message" required/>
                </label>
                <button type='submit'>Send</button>
            </form>
            <p>Email: mypersonal@gmail.com</p>
            <p>Phone: #sgohere</p>
        </section>
    );
};

export default Contact;