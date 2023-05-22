import you from '/you.jpg'

const Request = (props) => {
    return ( 
        <div className="request grid-a">
            <div className="logo">
                <img src={you} alt="You" />
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, adipisci.</p>
        </div>
     );
}
 
export default Request;