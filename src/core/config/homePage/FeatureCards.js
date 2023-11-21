const cards = [
    {
        id: 1,
        heading: 'Value Chain',
        content: 'Our seamless collaboration across each business stage ensures the exceptional delivery of products and services.',
        actions: [
            {
                action: 'Details',
                url: '/about/value-chain'
            }
        ],
        img: '/features/valuechain.jpg'
    },
    {
        id: 2,
        heading: 'Sustainability',
        content: 'Environmental responsibility is ingrained in our operations, minimizing our carbon footprint for a healthier planet.',
        actions: [
            {
                action: 'Details',
                url: '/about/sustainability'
            }
        ],
        img: '/features/sustainaibility.jpg'
    },
    {
        id: 3,
        heading: 'Our Business',
        content: 'A commitment to excellence, a diverse product range, and a deep focus on well-being – we go beyond transactions creating lasting impacts.',
        actions: [
            {
                action: 'Details',
                url: 'about/our-business'
            }
        ],
        img: '/features/ourbusiness.jpg'
    }
];

export const section = {
    title: 'About REDX',
    content: "REDX is a dynamic company with a widespread international reach, operating seamlessly across various sectors. Our dedicated team is passionate about delivering excellence, consisting of individuals who bring diverse skills and expertise to the table.",
    actions: [
        {
            action: 'About Us',
            url:'/about'
        },
        {
            action: 'Contact Us',
            url:'/contact'
        }
    ]
}


export default cards;