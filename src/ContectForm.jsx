// import React, { useState } from "react";

// const ContectForm = () => {
//     const [formData, SetformData] = useState({
//         name: '',
//         companyname: '',
//         email: '',
//         password: '',
//         phone: '',
//         description: '',
//         services: ''
//     });
//     const [submiteddata, Setsubmiteddata] = useState([]);
//     const [formerror, Setformerror] = useState({});
//     const handelChange = (e) => {
//         const { name, value } = e.target;
//         SetformData({
//             ...formData,
//             [name]: value
//         })
//     }

//     const validate = () => {
//         let formerror = {};
//         if (!formData.name) {
//             formerror.name = "Name is Required"
//         }
//         if (!formData.companyname) {
//             formerror.companyname = "Company Name is Required";
//         }
//         if (!formData.email) {
//             formerror.email = "Email is Required";
//         }
//         else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//             formerror.email = 'Email address is invalid';
//         }
//         if (!formData.password) {
//             formerror.password = "Password is Required"
//         }
//         else if (!formData.password.length >= 6) {
//             formerror.password = "Password must be 6 degit"
//         }
//         if (!formData.phone) {
//             formerror.phone = "Phone Number Is Required";
//         }
//         if (!formData.description) {
//             formerror.description = "Description is Required";
//         }
//         if (!formData.services) {
//             formerror.services = "Servicess is Required"
//         }
//         return formerror;
//     }
//     const handelSubmit = (e) => {
//         e.preventDefault()
//         const validationError = validate()
//         if (Object.keys(validationError.length > 0)) {
//             Setformerror(validationError)
//         }
//         else {
//             Setsubmiteddata([...submiteddata, formData]);
//             SetformData({
//                 name: '',
//                 companyname: '',
//                 email: '',
//                 password: '',
//                 phone: '',
//                 description: '',
//                 services: []
//             });

//             Setformerror({});
//         }

//     }

//     return (

//         <>
//             <form onSubmit={handelSubmit}>
//                 <div> Name*
//                     <input type="text" name="name"
//                         value={formData.name}
//                         onChange={handelChange}
//                         placeholder="Type Your name" />
//                     {formerror.name && <p> {formerror.name}</p>}
//                 </div>

//                 <div>
//                     Company Name*
//                     <input type="text" name="companyname"
//                         value={formData.companyname}
//                         onChange={handelChange}
//                         placeholder="Type Your companyname" />
//                     {formerror.companyname && <p> {formerror.companyname}</p>}
//                 </div>
//                 <div>
//                     Email*
//                     <input type="email" name="email"
//                         value={formData.email}
//                         onChange={handelChange}
//                         placeholder="Type Your email Address" />
//                     {formerror.email && <p> {formerror.email}</p>}
//                 </div>
//                 <div>
//                     Passward*
//                     <input type="password" name="password"
//                         value={formData.password}
//                         onChange={handelChange}
//                         placeholder="Type Your password" />
//                     {formerror.password && <p> {formerror.password}</p>}
//                 </div>
//                 <div>
//                     Phone Number*
//                     <input type="tel" name="phone"
//                         value={formData.phone}
//                         onChange={handelChange}
//                         placeholder="Type Your phone" />
//                     {formerror.phone && <p> {formerror.phone}</p>}
//                 </div>
//                 <div>
//                     Description*
//                     <input type="text" name="description"
//                         value={formData.description}
//                         onChange={handelChange}
//                         placeholder="Can Help You description"
//                         size={250} />
//                     {formerror.phone && <p> {formerror.phone}</p>}
//                 </div>
//                 <div id="Checkbox">
//                     Website
//                     <input type="checkbox" name="services"
//                         value={formData.services}
//                         onChange={handelChange}
//                     />
//                     Androiod
//                     <input type="checkbox" name="services"
//                         value={formData.services}
//                         onChange={handelChange}
//                     />
//                     Devlopment
//                     <input type="checkbox" name="services"
//                         value={formData.services}
//                         onChange={handelChange}
//                     />
//                     Deveopes
//                     <input type="checkbox" name="services"
//                         value={formData.services}
//                         onChange={handelChange}
//                     />
//                     Games
//                     <input type="checkbox" name="services"
//                         value={formData.services}
//                         onChange={handelChange}
//                     />
//                 </div>
//                 <button type="submit">Submit</button>
//             </form>
//             <h2>Submited Data</h2>
//             <ul>
//                 {submiteddata.map((data, index) => {
//                     <li key={index}>
//                         {index + 1.}.name:{data.name},
//                         companyname:{data.companyname},
//                         email:{data.email},
//                         password:{data.password},
//                         phone:{data.phone},
//                         description:{data.description}
//                         services:{data.services}
//                     </li>
//                 })}
//             </ul>
//         </>
//     )
// }

// export default ContectForm

import React, { useState } from "react";

const ContectForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        companyname: '',
        email: '',
        password: '',
        phone: '',
        description: '',
        services: []
    });

    const [submitedData, setSubmitedData] = useState([]);
    const [formError, setFormError] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            setFormData((prevData) => ({
                ...prevData,
                services: checked
                    ? [...prevData.services, value]
                    : prevData.services.filter((service) => service !== value)
            }));
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const validate = () => {
        let formError = {};
        if (!formData.name) {
            formError.name = "Name is Required";
        }
        if (!formData.companyname) {
            formError.companyname = "Company Name is Required";
        }
        if (!formData.email) {
            formError.email = "Email is Required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            formError.email = "Email address is invalid";
        }
        if (!formData.password) {
            formError.password = "Password is Required";
        } else if (formData.password.length < 6) {
            formError.password = "Password must be at least 6 characters";
        }
        if (!formData.phone) {
            formError.phone = "Phone Number Is Required";
        }
        if (!formData.description) {
            formError.description = "Description is Required";
        }
        if (formData.services.length === 0) {
            formError.services = "At least one service is required";
        }
        return formError;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationError = validate();
        if (Object.keys(validationError).length > 0) {
            setFormError(validationError);
        } else {
            setSubmitedData([...submitedData, formData]);
            setFormData({
                name: '',
                companyname: '',
                email: '',
                password: '',
                phone: '',
                description: '',
                services: []
            });
            setFormError({});
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    Name*
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Type Your name"
                    />
                    {formError.name && <p>{formError.name}</p>}
                </div>
                <div>
                    Company Name*
                    <input
                        type="text"
                        name="companyname"
                        value={formData.companyname}
                        onChange={handleChange}
                        placeholder="Type Your company name"
                    />
                    {formError.companyname && <p>{formError.companyname}</p>}
                </div>
                <div>
                    Email*
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Type Your email address"
                    />
                    {formError.email && <p>{formError.email}</p>}
                </div>
                <div>
                    Password*
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Type Your password"
                    />
                    {formError.password && <p>{formError.password}</p>}
                </div>
                <div>
                    Phone Number*
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Type Your phone number"
                    />
                    {formError.phone && <p>{formError.phone}</p>}
                </div>
                <div>
                    Description*
                    <input
                        type="text"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                    />
                    {formError.description && <p>{formError.description}</p>}
                </div>
                <div id="Checkbox">
                    Services*
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                name="services"
                                value="Website"
                                checked={formData.services.includes("Website")}
                                onChange={handleChange}
                            />
                            Website
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                name="services"
                                value="Android"
                                checked={formData.services.includes("Android")}
                                onChange={handleChange}
                            />
                            Android
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                name="services"
                                value="Development"
                                checked={formData.services.includes("Development")}
                                onChange={handleChange}
                            />
                            Development
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                name="services"
                                value="DevOps"
                                checked={formData.services.includes("DevOps")}
                                onChange={handleChange}
                            />
                            DevOps
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                name="services"
                                value="Games"
                                checked={formData.services.includes("Games")}
                                onChange={handleChange}
                            />
                            Games
                        </label>
                    </div>
                    {formError.services && <p>{formError.services}</p>}
                </div>
                <button type="submit">Submit</button>
            </form>
            <h2>Submitted Data</h2>
            <ul id="sub" type="none">
                {submitedData.map((data, index) => (
                    <li key={index}>
                        <div> Name: {data.name}</div>
                        <div>Company Name: {data.companyname}</div>
                        <div>Email: {data.email}, Password: {data.password}</div>
                        <div> Phone: {data.phone}</div>
                        <div>  Description: {data.description}</div>
                        <div> Services: {data.services.join(", ")}</div>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default ContectForm;
