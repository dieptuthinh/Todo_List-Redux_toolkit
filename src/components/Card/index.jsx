import React from 'react'
import { Link } from 'react-router-dom'


const Card = (props) => {
    const { header, title, text ,link} = props;
    return (
        <div className="col-md-4 mb-4">
            <div className="card">
                <div className="card-header">
                    {header}
                </div>
                <div className="card-body">
                    <h5 className="card-title">
                        {title}
                    </h5>
                    <p className="card-text">
                        {text}
                    </p>
                    <Link to={link} class="btn btn-primary">Let's go</Link>
                </div>

            </div>
        </div>
    )
}

export default Card
