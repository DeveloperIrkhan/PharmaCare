import React, {useState} from 'react'

const Accodion = ({Question,Answer}) => {
  const [Show, setShow] = useState(false);
    return (
        <div className='my-3'>
            <div>
                <div
                    onClick={() => setShow(!Show)}
                    type="button"
                    className="collapsible f-18-b">
                    {Question}
                    <span className="f-18-b float-end primary-color">
                        {Show ? <i className="fa-solid fa-chevron-up"></i> : <i className="fa-solid fa-chevron-down"></i>}
                    </span>
                </div>
                <div className="p-1 content f-18-n">
                    <p className='p-3'>{Show && Answer}</p>
                </div>
            </div>
        </div>
    )
}

export default Accodion