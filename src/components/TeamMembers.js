import React from 'react';
import seth from '../images/fronttruck.png';

const TeamMembers = () => {
    const teamMembers = [
        { name: "Seth Ewing-Hendricks", role: "Owner" },
        //{ name: "Matt Jameson", role: "Gas Line Specialist" },
        // { name: "Kolby Williams", role: "Administrative Assistant" },
        // { name: "Brooke Jameson", role: "Technology Specialist" },
    ];

    return (
        <div className="my-4 py-4" id="teammembers">
            <h2 className="my-2 text-center text-3xl text-red uppercase font-bold">Team Members</h2>
            <div className="flex justify-center">
                <div className="w-24 border-b-4 border-red mb-8"></div>
            </div>
            <div className="p-16" data-aos="fade-in" data-aos-delay="600">
                <div className="flex flex-row flex-wrap items-center gap-10 justify-center">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="text-center">
                            <div
                                className="overflow-hidden flex justify-center mb-4"
                                style={{ height: '275px', width: '100%' }}
                            >
                                <img src={seth} alt={member.name} />
                            </div>
                            <h3 className="text-l font-bold">{member.name}</h3>
                            <h3 className="text-l font-bold text-gray-500">{member.role}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TeamMembers;
