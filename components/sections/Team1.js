import Link from "next/link"

export default function Team1() {
    const teamMembers = [
        {
            id: 1,
            name: "Ibne Omar",
            position: "Cleaning Specialist",
            image: "/assets/img/team/team_img01.jpg",
            socialLinks: [
                { icon: "fab fa-facebook-f", url: "https://www.facebook.com/share/1G6kQXhC9v/" },
                { icon: "fab fa-linkedin-in", url: "#" },
                { icon: "fab fa-twitter", url: "#" },
                { icon: "fab fa-instagram", url: "https://www.instagram.com/ifs_au?igsh=MXZtZnkza2J4cnBkOQ==" }
            ]
        },
        {
            id: 2,
            name: "Fahim Ahmed",
            position: "Pressure Washing Expert",
            image: "/assets/img/team/team_img02.jpg",
            socialLinks: [
                { icon: "fab fa-facebook-f", url: "https://www.facebook.com/share/1G6kQXhC9v/" },
                { icon: "fab fa-linkedin-in", url: "#" },
                { icon: "fab fa-twitter", url: "#" },
                { icon: "fab fa-instagram", url: "https://www.instagram.com/ifs_au?igsh=MXZtZnkza2J4cnBkOQ==" }
            ]
        },
        {
            id: 3,
            name: "Minhaj Uddin Hassan",
            position: "Solar Panel Cleaning Specialist",
            image: "/assets/img/team/team_img03.jpg",
            socialLinks: [
                { icon: "fab fa-facebook-f", url: "https://www.facebook.com/share/1G6kQXhC9v/" },
                { icon: "fab fa-linkedin-in", url: "#" },
                { icon: "fab fa-twitter", url: "#" },
                { icon: "fab fa-instagram", url: "https://www.instagram.com/ifs_au?igsh=MXZtZnkza2J4cnBkOQ==" }
            ]
        }
    ];

    return (
        <>
            <section className="team-area pt-115 pb-90">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-title text-center mb-60 tg-heading-subheading animation-style3">
                                <span className="sub-title tg-element-title">Professional Team</span>
                                <h2 className="title tg-element-title">Our Expert Cleaning Team</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        {teamMembers.map((member) => (
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-10" key={member.id}>
                                <div className="team-item">
                                    <div className="team-thumb">
                                        <Link href="/team-details"><img src={member.image} alt={member.name} /></Link>
                                        <div className="team-social">
                                            <ul className="list-wrap">
                                                {member.socialLinks.map((social, index) => (
                                                    <li key={index}>
                                                        <Link href={social.url}><i className={social.icon} /></Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="team-content">
                                        <h2 className="title"><Link href="/team-details">{member.name}</Link></h2>
                                        <span>{member.position}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </>
    )
}