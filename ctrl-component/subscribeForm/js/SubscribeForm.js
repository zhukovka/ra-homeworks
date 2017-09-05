const SubscribeForm = ({postUrl}) => {
    /*TODO: Добавьте сюда форму для подписки на новости*/

    /* РЕШЕНИЕ */
    const onSubmit = (e) => {
        e.preventDefault();
        let target = e.currentTarget;
        let elements = target.elements;
        let hasError = [...elements].some(el => {
            return el.validity && !el.validity.valid;
        });
        if (hasError) {
            target.classList.remove("is-valid");
            target.classList.add("is-error");
        } else {
            target.classList.remove("is-error");
            target.classList.add("is-valid");
        }
    };

    return (
        <div className="subscribe__form">
            <form className="form form--subscribe" noValidate={true} onSubmit={onSubmit}>
                <h4 className="form-title">Sign up:</h4>
                <div className="form-group">
                    <label htmlFor="input-email" className="sr-only">Email</label>
                    <input type="email" id="input-email" placeholder="Email" className="form-control"/>
                    <div className="form-error">Please enter valid email</div>
                    <button type="submit" className="form-next"><i className="material-icons">keyboard_arrow_right</i>
                    </button>
                </div>
            </form>
        </div>);
    /* РЕШЕНИЕ */

};