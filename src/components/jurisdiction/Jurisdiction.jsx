import React, { useState, useEffect } from 'react';
import { tribunalsInfo } from '../../components/resources/data/data';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './jurisdiction.css';
import Card from '../ui/Card';
import Dropdown from '../../components/dropdowns/Dropdown';

const Jurisdiction = () => {
    const [description, setDescription] = useState([]);
    const [membersNo, setMembersNo] = useState("");
    const [image, setImage] = useState("");
    const [tribunalName, setTribunalName] = useState("");
    const [chairman, setChairman] = useState("");
    const [members, setMembers] = useState([]);
    const [jurisdictionName, setJurisdictionName] = useState([]);
    const [location, setLocation] = useState("");
    const [qrcode, setQrcode] = useState("");
    const [email, setEmail] = useState("");
    const { id } = useParams(); // Use destructuring to get the id from URL params

    useEffect(() => {
        const tribunal = tribunalsInfo.find((obj) => obj.id === id);
        if (tribunal) {
            setImage(tribunal.image);
            setTribunalName(tribunal.tribunalName);
            setDescription(tribunal.description);
            setChairman(tribunal.chairman);
            setMembersNo(tribunal.membersNo);
            setMembers(tribunal.members);
            setJurisdictionName(tribunal.jurisdiction);
            setQrcode(tribunal.qrcode);
            setLocation(tribunal.location);
            setEmail(tribunal.email);
        }
    }, [id]);

    return (
        <>
            <div className='jurisdiction_image'>
                <img src={image} alt={`${tribunalName} Image`} />
            </div>
            <section className="jurisdiction_plans">
                <div className='jurisdiction_container-left_box'>
                    <h2 className='tribename'>{tribunalName}</h2>
                    <h2 className='tribenames'>ChairPerson</h2>
                    <h3>{chairman}</h3>
                    <h2 className='tribenamess'>Current Members</h2>
                    {members.map(({ id, memberName }) => (
                        <ul className="list_members" key={id}>
                            <li className='list_member'>{memberName}</li>
                        </ul>
                    ))}
                </div>
                <div className="jurisdiction_container-right_box">
                    <h1>Establishment</h1>
                    <h3>{description}</h3>
                    <h2>Number of Members of the Tribunal</h2>
                    <h3>{membersNo}</h3>
                    <h2>Jurisdiction</h2>
                    {jurisdictionName.map(({ id, jurisdictionName }) => (
                        <ul key={id}>
                            <li>- {jurisdictionName}</li>
                        </ul>
                    ))}
                    <h2>Scan to see Judgements</h2>
                    <img className="qrcode" src={qrcode} alt="QR Code for Judgements" />
                    <h2>Location</h2>
                    <h3>{location}</h3>
                    <h2>Contact</h2>
                    <h3>{email}</h3>
                    <button className='efiling'>
                        <Link to="https://efiling.court.go.ke/" target="_blank">E-Filing</Link>
                    </button>
                </div>
            </section>
        </>
    );
}

export default Jurisdiction;
