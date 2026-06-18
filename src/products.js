/**
 * Veloura Coffee - Global Products Catalog
 * Unified database for all coffee products across the site.
 */

window.coffeeProducts = [
    {
        id: 'yirgacheffe-reserve',
        name: 'Yirgacheffe Reserve',
        origin: 'Ethiopia',
        roast: 'Light Roast',
        format: 'Whole Bean',
        price: 1299,
        salePrice: null,
        image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1974&auto=format&fit=crop',
        thumbnails: [
            'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2070&auto=format&fit=crop'
        ],
        description: 'Floral aroma with citrus brightness and delicate berry sweetness.',
        fullDescription: 'Sourced from Ethiopia’s renowned Yirgacheffe region, this reserve coffee showcases floral aromatics, delicate sweetness, and vibrant complexity. Grown in the highlands and washed-processed, it represents the absolute peak of light roast profiles, offering tea-like clarity and unparalleled elegance.',
        tastingNotes: ['Floral', 'Citrus', 'Berry Sweetness', 'Tea-like Finish'],
        category: 'Featured',
        badge: 'Best Seller',
        isReserve: true,
        rating: 4.9,
        reviewsCount: 142,
        reviews: [
            { name: 'Aarav Mehta', rating: 5, comment: 'The finest light roast I have ever tasted! Exceptional tea-like clarity.' },
            { name: 'Sarah W.', rating: 5, comment: 'Absolutely divine notes of jasmine and citrus. Consistent roast profiles!' }
        ],
        brewingGuide: 'Best brewed as a Pour Over (V60). Use 15g of medium-coarse ground coffee to 250g of water at 93°C. Pour in circular motions, aiming for a 3-minute total draw down time.'
    },
    {
        id: 'andean-estate',
        name: 'Andean Estate',
        origin: 'Colombia',
        roast: 'Medium Roast',
        format: 'Whole Bean',
        price: 1499,
        salePrice: null,
        image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2070&auto=format&fit=crop',
        thumbnails: [
            'https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1974&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1974&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=2070&auto=format&fit=crop'
        ],
        description: 'Rich chocolate body balanced with caramel sweetness and stone fruit acidity.',
        fullDescription: 'Hand-picked in the high altitudes of the Colombian Andes, this coffee represents traditional craftsmanship at its best. Perfectly medium roasted, it delivers a robust, chocolate-forward profile that melts into caramel sweetness with a subtle hint of bright stone fruits in the finish.',
        tastingNotes: ['Milk Chocolate', 'Caramel', 'Stone Fruit', 'Creamy Body'],
        category: 'Featured',
        badge: 'Best Seller',
        isReserve: true,
        rating: 4.8,
        reviewsCount: 96,
        reviews: [
            { name: 'Vikram R.', rating: 5, comment: 'Incredibly balanced. Excellent chocolate and caramel undertones.' },
            { name: 'Meera Sen', rating: 4, comment: 'A smooth everyday drinker. Works wonderfully in an Aeropress.' }
        ],
        brewingGuide: 'Highly versatile. Excellent in a French Press or Aeropress. Use a 1:15 ratio (20g coffee to 300g water) at 95°C. Steep for 4 minutes in a French Press before plunging.'
    },
    {
        id: 'geisha-signature',
        name: 'Geisha Signature',
        origin: 'Panama',
        roast: 'Light Roast',
        format: 'Whole Bean',
        price: 1899,
        salePrice: null,
        image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=2070&auto=format&fit=crop',
        thumbnails: [
            'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1974&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1974&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2070&auto=format&fit=crop'
        ],
        description: 'Elegant jasmine aroma with tropical sweetness and tea-like clarity.',
        fullDescription: 'Our hallmark reserve coffee, the Panama Geisha Signature is famous worldwide. Boasting an array of floral notes reminiscent of fresh jasmine, it unfolds into tropical fruit sweetness (mango and passion fruit) with an ultra-clean, elegant tea-like clarity.',
        tastingNotes: ['Jasmine', 'Mango', 'Bergamot', 'Silky Clarity'],
        category: 'Featured',
        badge: 'Rare Reserve',
        isReserve: true,
        rating: 5.0,
        reviewsCount: 78,
        reviews: [
            { name: 'Kunal K.', rating: 5, comment: 'Hands down the most complex, beautiful cup of coffee. The jasmine aroma fills the room.' },
            { name: 'Diana C.', rating: 5, comment: 'A true sensory experience. Expensive but absolutely worth every rupee.' }
        ],
        brewingGuide: 'Best brewed on a Chemex or V60 with fine paper filters to highlight its clean, delicate structure. Use a 1:16 ratio with soft, filtered water at 92°C.'
    },
    {
        id: 'honey-processed-gesha',
        name: 'Honey Processed Gesha',
        origin: 'Panama',
        roast: 'Light Roast',
        format: 'Whole Bean',
        price: 1599,
        salePrice: null,
        image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1974&auto=format&fit=crop',
        thumbnails: [
            'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1974&auto=format&fit=crop'
        ],
        description: 'Vibrant notes of honey, ripe peach, and clean floral sweetness.',
        fullDescription: 'Processed using the delicate yellow-honey method, this Gesha retains fruit mucilage during drying, producing a cup bursting with sweet honey syrup, succulent ripe peach, and a delicate bouquet of wild jasmine.',
        tastingNotes: ['Honey', 'Ripe Peach', 'Jasmine', 'Syrupy Finish'],
        category: 'New Launches',
        badge: 'New Launch',
        isReserve: true,
        rating: 4.9,
        reviewsCount: 12,
        reviews: [
            { name: 'Elena R.', rating: 5, comment: 'Unreal sweetness! It feels like drinking liquid peach honey.' }
        ],
        brewingGuide: 'V60 Pour Over. 16g coffee, 240g water at 94°C. 40-second bloom. Total brew time: 2m 45s.'
    },
    {
        id: 'bourbon-sidama',
        name: 'Bourbon Sidama',
        origin: 'Ethiopia',
        roast: 'Light Roast',
        format: 'Whole Bean',
        price: 1349,
        salePrice: null,
        image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=80',
        thumbnails: [
            'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2070&auto=format&fit=crop'
        ],
        description: 'Sweet strawberry aroma, jasmine, and rich sugarcane base.',
        fullDescription: 'Grown by multi-generational smallholders in the Sidama region, this heirloom Bourbon varietal is dry-natural processed. It delivers an intense, jammy strawberry fragrance paired with jasmine and a persistent sugarcane sweetness.',
        tastingNotes: ['Strawberry Jam', 'Jasmine', 'Sugarcane', 'Citrus Peel'],
        category: 'New Launches',
        badge: 'New Launch',
        isReserve: false,
        rating: 4.7,
        reviewsCount: 22,
        reviews: [
            { name: 'Karthik N.', rating: 5, comment: 'Tastes like strawberry candy with a clean coffee base. Unbelievably good.' }
        ],
        brewingGuide: 'Aeropress (inverted method). 17g medium-fine grind, 200g water at 90°C. Stir for 20s, steep for 1m, press slowly for 30s.'
    },
    {
        id: 'sulawesi-kalossi',
        name: 'Sulawesi Kalossi',
        origin: 'Indonesia',
        roast: 'Medium Roast',
        format: 'Ground',
        price: 1199,
        salePrice: null,
        image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1974&auto=format&fit=crop',
        thumbnails: [
            'https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1974&auto=format&fit=crop'
        ],
        description: 'Bold body with dark chocolate, spice, and aromatic cedar notes.',
        fullDescription: 'From the mountainous island of Sulawesi, this traditional Kalossi is wet-hulled (Giling Basah), yielding a deep forest-green bean. When roasted, it results in a heavy-bodied cup rich with dark cocoa, warm spices, and a woody cedar aroma.',
        tastingNotes: ['Dark Cocoa', 'Warm Spices', 'Cedarwood', 'Earthy Body'],
        category: 'New Launches',
        badge: 'New Launch',
        isReserve: false,
        rating: 4.6,
        reviewsCount: 18,
        reviews: [
            { name: 'Ananya D.', rating: 4, comment: 'A wonderfully heavy, satisfying cup. Perfect for morning milk coffees.' }
        ],
        brewingGuide: 'South Indian Filter or French Press. Steep 20g of coarse grounds in 280g of water at 96°C for 5 minutes to extract maximum body.'
    },
    {
        id: 'highland-blend',
        name: 'Highland Blend',
        origin: 'Multi-Origin',
        roast: 'Medium Roast',
        format: 'Ground',
        price: 1099,
        salePrice: 899,
        image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop',
        thumbnails: [
            'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2070&auto=format&fit=crop'
        ],
        description: 'Smooth and highly balanced daily blend with caramel and roasted almond.',
        fullDescription: 'A custom blend of specialty-grade beans from Latin America and East Africa. Medium roasted to highlight sweetness and clean balance. Notes of warm caramel, milk chocolate, and toasted almond with a smooth, clean finish.',
        tastingNotes: ['Caramel', 'Roasted Almond', 'Milk Chocolate', 'Smooth'],
        category: 'Deals',
        badge: 'Save 18%',
        isReserve: false,
        rating: 4.8,
        reviewsCount: 310,
        reviews: [
            { name: 'Rohan P.', rating: 5, comment: 'My go-to daily morning coffee. Very smooth and balanced, never bitter!' }
        ],
        brewingGuide: 'Perfect for Drip Coffee Makers or Pour Over. Use standard 1:16 ratio with hot water.'
    },
    {
        id: 'nightowl-espresso',
        name: 'Nightowl Espresso',
        origin: 'Brazil',
        roast: 'Dark Roast',
        format: 'Pods',
        price: 999,
        salePrice: 799,
        image: 'https://images.unsplash.com/photo-1512568400610-62da28bc8a13?q=80&w=1974&auto=format&fit=crop',
        thumbnails: [
            'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=2070&auto=format&fit=crop'
        ],
        description: 'Intense and creamy dark roast espresso pods with dark cocoa aroma.',
        fullDescription: 'Nespresso-compatible espresso pods loaded with select dark-roasted Brazilian beans. Delivers a thick, velvety crema, a heavy syrupy body, and a punchy dark cocoa aroma with low acidity.',
        tastingNotes: ['Dark Cocoa', 'Toasted Hazelnut', 'Molasses', 'Thick Crema'],
        category: 'Deals',
        badge: 'Save 20%',
        isReserve: false,
        rating: 4.5,
        reviewsCount: 198,
        reviews: [
            { name: 'Sneha J.', rating: 5, comment: 'Insanely rich crema and works flawlessly in my pod machine. Excellent deal!' }
        ],
        brewingGuide: 'Brew as a short espresso shot (30ml - 40ml) on your pod machine. Optional: add texturized hot milk for a luxurious cortado.'
    },
    {
        id: 'sumatra-mandheling',
        name: 'Sumatra Mandheling',
        origin: 'Indonesia',
        roast: 'Dark Roast',
        format: 'Whole Bean',
        price: 1249,
        salePrice: null,
        image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1974&auto=format&fit=crop',
        thumbnails: [
            'https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1974&auto=format&fit=crop'
        ],
        description: 'Deeply earthy and exotic dark roast with notes of cedar, leather, and cocoa.',
        fullDescription: 'A classic Sumatra Mandheling processed using wet-hulled methods in Northern Sumatra. Heavy-bodied, syrupy, and near-zero acidity. Features exotic, deep forest earthy notes with cocoa, cedar, and hints of herbal tobacco.',
        tastingNotes: ['Earthy', 'Dark Cocoa', 'Cedarwood', 'Syrupy Mouthfeel'],
        category: 'Best Sellers',
        badge: 'Best Seller',
        isReserve: false,
        rating: 4.8,
        reviewsCount: 167,
        reviews: [
            { name: 'Amit G.', rating: 5, comment: 'For lovers of deep, rich, low-acid dark roasts. Bold flavor that holds up to cream.' }
        ],
        brewingGuide: 'French Press or Espresso. Use 20g coarse coffee to 300g water at 96°C. Steep 5m for french press.'
    },
    {
        id: 'guatemala-antigua',
        name: 'Guatemala Antigua',
        origin: 'Guatemala',
        roast: 'Medium Roast',
        format: 'Whole Bean',
        price: 1399,
        salePrice: null,
        image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1974&auto=format&fit=crop',
        thumbnails: [
            'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop'
        ],
        description: 'Complex spice notes, cocoa, and bright apple acidity.',
        fullDescription: 'Cultivated in the volcanic soil of the Antigua Valley, this coffee is known for its complex flavor profile. It features rich cocoa, warm spice notes, and a signature bright apple-like acidity that creates a perfectly balanced cup.',
        tastingNotes: ['Cocoa', 'Warm Spice', 'Apple Acidity', 'Balanced'],
        category: 'Best Sellers',
        badge: 'Best Seller',
        isReserve: false,
        rating: 4.7,
        reviewsCount: 215,
        reviews: [
            { name: 'Daniel K.', rating: 5, comment: 'Incredible balance! The chocolate and spice notes are perfect for a morning brew.' }
        ],
        brewingGuide: 'Drip machine or Pour Over. 1:15 ratio with water at 94°C.'
    }
];
