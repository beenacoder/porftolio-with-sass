import './contact.scss';

const Contact = () => {
    return (
        <div className='contact' id="contact">
            <div className="left">
                <img src="assets/shake.svg" alt="" />
            </div>
            <div className="right">
                <h2>Contáctame</h2>
                <form>
                    <input type="text" placeholder='Tu correo...' />
                    <textarea placeholder='Tu mensaje...'></textarea>
                    <button type='submit'>Enviar</button>
                </form>
            </div>
        </div>
    )
}

export default Contact