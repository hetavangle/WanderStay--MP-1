// const sampleListings =[
//   {
//     "title": "Cozy Beachfront Cottage",
//     "description": "Escape to this charming beachfront cottage with ocean views and direct beach access.",
//     "image": "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
//     "price": 1500,
//     "location": "Malibu",
//     "country": "United States"
//   },
//   {
//     "title": "Modern City Apartment",
//     "description": "Stay in the heart of the city with skyline views and easy metro access.",
//     "image": "https://images.unsplash.com/photo-1615571022219-eb45cf7faa9d?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
//     "price": 2200,
//     "location": "New York",
//     "country": "United States"
//   },
//   {
//     "title": "Mountain Cabin Retreat",
//     "description": "Peaceful cabin surrounded by pine forests and scenic mountain views.",
//     "image": "https://images.unsplash.com/photo-1517541866997-ea18e32ea9e9?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
//     "price": 1200,
//     "location": "Aspen",
//     "country": "United States"
//   },
//   {
//     "title": "Luxury Villa with Pool",
//     "description": "Spacious villa featuring a private pool and modern interiors.",
//     "image": "https://images.unsplash.com/photo-1721369483526-62f48a00b949?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
//     "price": 5000,
//     "location": "Bali",
//     "country": "Indonesia"
//   },
//   {
//     "title": "Rustic Farmhouse Stay",
//     "description": "Countryside stay with fresh air, open fields, and a calm atmosphere.",
//     "image": "https://images.unsplash.com/photo-1528913775512-624d24b27b96?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
//     "price": 900,
//     "location": "Tuscany",
//     "country": "Italy"
//   },
//   {
//     "title": "Seaside Studio Apartment",
//     "description": "Compact studio with sea views and a polished modern finish.",
//     "image": "https://images.unsplash.com/photo-1605549339992-83721992836e?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
//     "price": 1100,
//     "location": "Barcelona",
//     "country": "Spain"
//   },
//   {
//     "title": "Desert Luxury Camp",
//     "description": "Unique stay in a luxury tent under clear desert skies.",
//     "image": "https://images.unsplash.com/photo-1544143086-828f66ac3945?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
//     "price": 1800,
//     "location": "Dubai",
//     "country": "UAE"
//   },
//   {
//     "title": "Lakeview Wooden Cabin",
//     "description": "Relax by the lake with sunsets, still water, and cozy interiors.",
//     "image": "https://images.unsplash.com/photo-1597211833712-5e41faa202ea?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
//     "price": 1300,
//     "location": "Lake Tahoe",
//     "country": "United States"
//   },
//   {
//     "title": "Urban Loft",
//     "description": "Stylish loft with industrial design in a lively neighborhood.",
//     "image": "https://images.unsplash.com/photo-1510608658071-c48be9a076f6?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
//     "price": 2000,
//     "location": "Berlin",
//     "country": "Germany"
//   },
//   {
//     "title": "Jungle Treehouse",
//     "description": "Eco-friendly treehouse tucked into lush tropical greenery.",
//     "image": "https://images.unsplash.com/photo-1511840636560-acee95b3a83f?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
//     "price": 1600,
//     "location": "Ubud",
//     "country": "Indonesia"
//   },
//   {
//     "title": "Cliffside Villa",
//     "description": "Luxury villa perched above the sea with wide-open views.",
//     "image": "https://images.unsplash.com/photo-1511840831832-3efd661c1d0f?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
//     "price": 4500,
//     "location": "Santorini",
//     "country": "Greece"
//   },
//   {
//     "title": "Snowy Chalet",
//     "description": "Winter getaway with fireplace warmth and ski access nearby.",
//     "image": "https://images.unsplash.com/photo-1433477303177-8270baa12c9a?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
//     "price": 2500,
//     "location": "Zermatt",
//     "country": "Switzerland"
//   },
//   {
//     "title": "Budget Backpacker Hostel",
//     "description": "Affordable stay with shared rooms and a social vibe.",
//     "image": "https://images.unsplash.com/photo-1597475681177-809cfdc76cd2?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
//     "price": 300,
//     "location": "Bangkok",
//     "country": "Thailand"
//   },
//   {
//     "title": "Island Beach Hut",
//     "description": "Simple hut right on the beach for a laid-back stay.",
//     "image": "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
//     "price": 700,
//     "location": "Goa",
//     "country": "India"
//   },
//   {
//     "title": "Historic Stone House",
//     "description": "Restored stone home with character and old-world charm.",
//     "image": "https://images.unsplash.com/photo-1615571022219-eb45cf7faa9d?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
//     "price": 1400,
//     "location": "Edinburgh",
//     "country": "United Kingdom"
//   },
//   {
//     "title": "City Center Penthouse",
//     "description": "Top-floor penthouse with panoramic skyline views.",
//     "image": "https://images.unsplash.com/photo-1517541866997-ea18e32ea9e9?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
//     "price": 6000,
//     "location": "Tokyo",
//     "country": "Japan"
//   },
//   {
//     "title": "Minimalist Studio",
//     "description": "Clean, simple space ideal for short stays.",
//     "image": "https://images.unsplash.com/photo-1721369483526-62f48a00b949?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
//     "price": 1000,
//     "location": "Seoul",
//     "country": "South Korea"
//   },
//   {
//     "title": "Beach Resort Suite",
//     "description": "Luxury suite with resort amenities and beach access.",
//     "image": "https://images.unsplash.com/photo-1528913775512-624d24b27b96?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
//     "price": 3500,
//     "location": "Phuket",
//     "country": "Thailand"
//   },
//   {
//     "title": "Countryside Barn Stay",
//     "description": "Converted barn with rustic charm and modern comfort.",
//     "image": "https://images.unsplash.com/photo-1605549339992-83721992836e?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
//     "price": 1100,
//     "location": "Yorkshire",
//     "country": "United Kingdom"
//   },
//   {
//     "title": "Riverfront Cabin",
//     "description": "Cabin with direct river access and peaceful surroundings.",
//     "image": "https://images.unsplash.com/photo-1544143086-828f66ac3945?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
//     "price": 1250,
//     "location": "Banff",
//     "country": "Canada"
//   },
//   {
//     "title": "Luxury Desert Villa",
//     "description": "Private villa in the desert with an infinity pool.",
//     "image": "https://images.unsplash.com/photo-1597211833712-5e41faa202ea?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
//     "price": 4800,
//     "location": "Marrakech",
//     "country": "Morocco"
//   },
//   {
//     "title": "Hilltop Cottage",
//     "description": "Quiet cottage with panoramic valley views.",
//     "image": "https://images.unsplash.com/photo-1510608658071-c48be9a076f6?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
//     "price": 1350,
//     "location": "Shimla",
//     "country": "India"
//   },
//   {
//     "title": "Modern Glass House",
//     "description": "Architectural glass house surrounded by nature.",
//     "image": "https://images.unsplash.com/photo-1511840636560-acee95b3a83f?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
//     "price": 2700,
//     "location": "Vancouver",
//     "country": "Canada"
//   },
//   {
//     "title": "Tropical Lagoon Bungalow",
//     "description": "Bright bungalow with lagoon views and island calm.",
//     "image": "https://images.unsplash.com/photo-1511840831832-3efd661c1d0f?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
//     "price": 2100,
//     "location": "Rarotonga",
//     "country": "Cook Islands"
//   },
//   {
//     "title": "Designer Duplex",
//     "description": "Two-level stay with premium finishes and a large living area.",
//     "image": "https://images.unsplash.com/photo-1433477303177-8270baa12c9a?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
//     "price": 2900,
//     "location": "Singapore",
//     "country": "Singapore"
//   },
//   {
//     "title": "Forest Hideaway",
//     "description": "Private hideaway wrapped in tall trees and fresh air.",
//     "image": "https://images.unsplash.com/photo-1597475681177-809cfdc76cd2?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
//     "price": 1450,
//     "location": "Portland",
//     "country": "United States"
//   },
//   {
//     "title": "Harbor View Apartment",
//     "description": "Apartment overlooking the harbor with easy downtown access.",
//     "image": "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
//     "price": 1950,
//     "location": "Sydney",
//     "country": "Australia"
//   },
//   {
//     "title": "Coastal Family Villa",
//     "description": "Spacious villa made for group stays near the shoreline.",
//     "image": "https://images.unsplash.com/photo-1615571022219-eb45cf7faa9d?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
//     "price": 4200,
//     "location": "Nice",
//     "country": "France"
//   },
//   {
//     "title": "Riverside Tiny House",
//     "description": "Small footprint stay with smart design and river views.",
//     "image": "https://images.unsplash.com/photo-1517541866997-ea18e32ea9e9?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
//     "price": 850,
//     "location": "Ljubljana",
//     "country": "Slovenia"
//   },
//   {
//     "title": "Luxury Ski Lodge",
//     "description": "Premium lodge with mountain views and after-ski comfort.",
//     "image": "https://images.unsplash.com/photo-1721369483526-62f48a00b949?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
//     "price": 3900,
//     "location": "Whistler",
//     "country": "Canada"
//   },
//   {
//     "title": "Boutique Hotel Suite",
//     "description": "Polished suite with boutique styling and central location.",
//     "image": "https://images.unsplash.com/photo-1528913775512-624d24b27b96?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
//     "price": 2400,
//     "location": "Milan",
//     "country": "Italy"
//   },
//   {
//     "title": "Sunset Beach Villa",
//     "description": "Bright villa where every evening ends with an ocean sunset.",
//     "image": "https://images.unsplash.com/photo-1605549339992-83721992836e?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
//     "price": 4100,
//     "location": "Punta Cana",
//     "country": "Dominican Republic"
//   },
//   {
//     "title": "Contemporary Courtyard Home",
//     "description": "Quiet home built around a private courtyard and natural light.",
//     "image": "https://images.unsplash.com/photo-1544143086-828f66ac3945?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
//     "price": 1750,
//     "location": "Lisbon",
//     "country": "Portugal"
//   },
//   {
//     "title": "Mediterranean Terrace Stay",
//     "description": "Terrace apartment with warm light and a relaxed coastal feel.",
//     "image": "https://images.unsplash.com/photo-1597211833712-5e41faa202ea?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
//     "price": 1650,
//     "location": "Split",
//     "country": "Croatia"
//   },
//   {
//     "title": "Elegant Canal House",
//     "description": "Classic house on the water with refined interiors.",
//     "image": "https://images.unsplash.com/photo-1510608658071-c48be9a076f6?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
//     "price": 3100,
//     "location": "Amsterdam",
//     "country": "Netherlands"
//   },
//   {
//     "title": "Highland Cottage",
//     "description": "Remote cottage with open skies, hills, and complete quiet.",
//     "image": "https://images.unsplash.com/photo-1511840636560-acee95b3a83f?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
//     "price": 1150,
//     "location": "Inverness",
//     "country": "United Kingdom"
//   },
//   {
//     "title": "Palm Grove Bungalow",
//     "description": "Relaxed bungalow surrounded by palms and tropical air.",
//     "image": "https://images.unsplash.com/photo-1511840831832-3efd661c1d0f?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
//     "price": 1900,
//     "location": "Mombasa",
//     "country": "Kenya"
//   },
//   {
//     "title": "Urban Skyline Flat",
//     "description": "Modern flat with glass walls and city skyline views.",
//     "image": "https://images.unsplash.com/photo-1433477303177-8270baa12c9a?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
//     "price": 2300,
//     "location": "Chicago",
//     "country": "United States"
//   },
//   {
//     "title": "Artisan Loft",
//     "description": "Creative loft with bold textures and open-plan living.",
//     "image": "https://images.unsplash.com/photo-1597475681177-809cfdc76cd2?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
//     "price": 2050,
//     "location": "Mexico City",
//     "country": "Mexico"
//   },
//   {
//     "title": "Secluded Cliff House",
//     "description": "Private house on the edge of the coast with dramatic views.",
//     "image": "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
//     "price": 5300,
//     "location": "Auckland",
//     "country": "New Zealand"
//   },
//   {
//     "title": "Garden Cottage",
//     "description": "Quiet cottage with a private garden and soft natural light.",
//     "image": "https://images.unsplash.com/photo-1615571022219-eb45cf7faa9d?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
//     "price": 1200,
//     "location": "Cotswolds",
//     "country": "United Kingdom"
//   },
//   {
//     "title": "Executive Apartment",
//     "description": "Clean executive stay with premium furnishing and fast access to business hubs.",
//     "image": "https://images.unsplash.com/photo-1517541866997-ea18e32ea9e9?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
//     "price": 2800,
//     "location": "Dubai",
//     "country": "UAE"
//   },
//   {
//     "title": "Eco Retreat Cabin",
//     "description": "Sustainable cabin designed for slow mornings and offline time.",
//     "image": "https://images.unsplash.com/photo-1721369483526-62f48a00b949?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
//     "price": 1500,
//     "location": "Costa Rica",
//     "country": "Costa Rica"
//   },
//   {
//     "title": "Lagoon Side Villa",
//     "description": "Luxury villa steps from calm water and palm-lined paths.",
//     "image": "https://images.unsplash.com/photo-1528913775512-624d24b27b96?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
//     "price": 4600,
//     "location": "Zanzibar",
//     "country": "Tanzania"
//   },
//   {
//     "title": "Panoramic Rooftop Suite",
//     "description": "Suite with rooftop views and a sharp, modern interior.",
//     "image": "https://images.unsplash.com/photo-1605549339992-83721992836e?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
//     "price": 3700,
//     "location": "Hong Kong",
//     "country": "China"
//   },
//   {
//     "title": "Old Town Loft",
//     "description": "Loft in the historic district with walkable streets outside.",
//     "image": "https://images.unsplash.com/photo-1544143086-828f66ac3945?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
//     "price": 1850,
//     "location": "Prague",
//     "country": "Czech Republic"
//   },
//   {
//     "title": "Private Beach House",
//     "description": "Standalone beach house with space, privacy, and uninterrupted views.",
//     "image": "https://images.unsplash.com/photo-1597211833712-5e41faa202ea?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
//     "price": 5200,
//     "location": "Gold Coast",
//     "country": "Australia"
//   },
//   {
//     "title": "Clifftop Eco Villa",
//     "description": "Eco-minded villa set above the shoreline for a dramatic stay.",
//     "image": "https://images.unsplash.com/photo-1510608658071-c48be9a076f6?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
//     "price": 4400,
//     "location": "Madeira",
//     "country": "Portugal"
//   },
//   {
//     "title": "Marina View Apartment",
//     "description": "Bright apartment looking over the marina and harbor lights.",
//     "image": "https://images.unsplash.com/photo-1511840636560-acee95b3a83f?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
//     "price": 2150,
//     "location": "Dubrovnik",
//     "country": "Croatia"
//   },
//   {
//     "title": "Serene Waterside Cottage",
//     "description": "Cottage right by the water with a calm and restful feel.",
//     "image": "https://images.unsplash.com/photo-1511840831832-3efd661c1d0f?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
//     "price": 1380,
//     "location": "Maine",
//     "country": "United States"
//   }
// ]
// module.exports = { data: sampleListings };

const sampleListings = [
  {
    "title": "Cozy Beachfront Cottage",
    "description": "Escape to this charming beachfront cottage with ocean views and direct beach access.",
    "image": "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
    "price": 1500,
    "location": "Malibu",
    "country": "United States"
  },
  {
    "title": "Modern City Apartment",
    "description": "Stay in the heart of the city with skyline views and easy metro access.",
    "image": "https://images.unsplash.com/photo-1615571022219-eb45cf7faa9d?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
    "price": 2200,
    "location": "New York",
    "country": "United States"
  },
  {
    "title": "Mountain Cabin Retreat",
    "description": "Peaceful cabin surrounded by pine forests and scenic mountain views.",
    "image": "https://images.unsplash.com/photo-1517541866997-ea18e32ea9e9?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
    "price": 1200,
    "location": "Aspen",
    "country": "United States"
  },
  {
    "title": "Luxury Villa with Pool",
    "description": "Spacious villa featuring a private pool and modern interiors.",
    "image": "https://images.unsplash.com/photo-1721369483526-62f48a00b949?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
    "price": 5000,
    "location": "Bali",
    "country": "Indonesia"
  },
  {
    "title": "Rustic Farmhouse Stay",
    "description": "Countryside stay with fresh air, open fields, and a calm atmosphere.",
    "image": "https://images.unsplash.com/photo-1528913775512-624d24b27b96?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
    "price": 900,
    "location": "Tuscany",
    "country": "Italy"
  },
  {
    "title": "Seaside Studio Apartment",
    "description": "Compact studio with sea views and a polished modern finish.",
    "image": "https://images.unsplash.com/photo-1605549339992-83721992836e?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
    "price": 1100,
    "location": "Barcelona",
    "country": "Spain"
  },
  {
    "title": "Desert Luxury Camp",
    "description": "Unique stay in a luxury tent under clear desert skies.",
    "image": "https://images.unsplash.com/photo-1544143086-828f66ac3945?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
    "price": 1800,
    "location": "Dubai",
    "country": "UAE"
  },
  {
    "title": "Lakeview Wooden Cabin",
    "description": "Relax by the lake with sunsets, still water, and cozy interiors.",
    "image": "https://images.unsplash.com/photo-1597211833712-5e41faa202ea?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
    "price": 1300,
    "location": "Lake Tahoe",
    "country": "United States"
  },
  {
    "title": "Urban Loft",
    "description": "Stylish loft with industrial design in a lively neighborhood.",
    "image": "https://images.unsplash.com/photo-1510608658071-c48be9a076f6?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
    "price": 2000,
    "location": "Berlin",
    "country": "Germany"
  },
  {
    "title": "Jungle Treehouse",
    "description": "Eco-friendly treehouse tucked into lush tropical greenery.",
    "image": "https://images.unsplash.com/photo-1511840636560-acee95b3a83f?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
    "price": 1600,
    "location": "Ubud",
    "country": "Indonesia"
  },
  {
    "title": "Cliffside Villa",
    "description": "Luxury villa perched above the sea with wide-open views.",
    "image": "https://images.unsplash.com/photo-1511840831832-3efd661c1d0f?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
    "price": 4500,
    "location": "Santorini",
    "country": "Greece"
  },
  {
    "title": "Snowy Chalet",
    "description": "Winter getaway with fireplace warmth and ski access nearby.",
    "image": "https://images.unsplash.com/photo-1433477303177-8270baa12c9a?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
    "price": 2500,
    "location": "Zermatt",
    "country": "Switzerland"
  },
  {
    "title": "Budget Backpacker Hostel",
    "description": "Affordable stay with shared rooms and a social vibe.",
    "image": "https://images.unsplash.com/photo-1597475681177-809cfdc76cd2?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
    "price": 300,
    "location": "Bangkok",
    "country": "Thailand"
  },
  {
    "title": "Island Beach Hut",
    "description": "Simple hut right on the beach for a laid-back stay.",
    "image": "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
    "price": 700,
    "location": "Goa",
    "country": "India"
  },
  {
    "title": "Historic Stone House",
    "description": "Restored stone home with character and old-world charm.",
    "image": "https://images.unsplash.com/photo-1615571022219-eb45cf7faa9d?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
    "price": 1400,
    "location": "Edinburgh",
    "country": "United Kingdom"
  },
  {
    "title": "City Center Penthouse",
    "description": "Top-floor penthouse with panoramic skyline views.",
    "image": "https://images.unsplash.com/photo-1517541866997-ea18e32ea9e9?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
    "price": 6000,
    "location": "Tokyo",
    "country": "Japan"
  },
  {
    "title": "Minimalist Studio",
    "description": "Clean, simple space ideal for short stays.",
    "image": "https://images.unsplash.com/photo-1721369483526-62f48a00b949?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
    "price": 1000,
    "location": "Seoul",
    "country": "South Korea"
  },
  {
    "title": "Beach Resort Suite",
    "description": "Luxury suite with resort amenities and beach access.",
    "image": "https://images.unsplash.com/photo-1528913775512-624d24b27b96?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
    "price": 3500,
    "location": "Phuket",
    "country": "Thailand"
  },
  {
    "title": "Countryside Barn Stay",
    "description": "Converted barn with rustic charm and modern comfort.",
    "image": "https://images.unsplash.com/photo-1605549339992-83721992836e?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
    "price": 1100,
    "location": "Yorkshire",
    "country": "United Kingdom"
  },
  {
    "title": "Riverfront Cabin",
    "description": "Cabin with direct river access and peaceful surroundings.",
    "image": "https://images.unsplash.com/photo-1544143086-828f66ac3945?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
    "price": 1250,
    "location": "Banff",
    "country": "Canada"
  },
  {
    "title": "Luxury Desert Villa",
    "description": "Private villa in the desert with an infinity pool.",
    "image": "https://images.unsplash.com/photo-1597211833712-5e41faa202ea?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
    "price": 4800,
    "location": "Marrakech",
    "country": "Morocco"
  },
  {
    "title": "Hilltop Cottage",
    "description": "Quiet cottage with panoramic valley views.",
    "image": "https://images.unsplash.com/photo-1510608658071-c48be9a076f6?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
    "price": 1350,
    "location": "Shimla",
    "country": "India"
  },
  {
    "title": "Modern Glass House",
    "description": "Architectural glass house surrounded by nature.",
    "image": "https://images.unsplash.com/photo-1511840636560-acee95b3a83f?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
    "price": 2700,
    "location": "Vancouver",
    "country": "Canada"
  },
  {
    "title": "Tropical Lagoon Bungalow",
    "description": "Bright bungalow with lagoon views and island calm.",
    "image": "https://images.unsplash.com/photo-1511840831832-3efd661c1d0f?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
    "price": 2100,
    "location": "Rarotonga",
    "country": "Cook Islands"
  },
  {
    "title": "Designer Duplex",
    "description": "Two-level stay with premium finishes and a large living area.",
    "image": "https://images.unsplash.com/photo-1433477303177-8270baa12c9a?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
    "price": 2900,
    "location": "Singapore",
    "country": "Singapore"
  },
  {
    "title": "Forest Hideaway",
    "description": "Private hideaway wrapped in tall trees and fresh air.",
    "image": "https://images.unsplash.com/photo-1597475681177-809cfdc76cd2?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
    "price": 1450,
    "location": "Portland",
    "country": "United States"
  },
  {
    "title": "Harbor View Apartment",
    "description": "Apartment overlooking the harbor with easy downtown access.",
    "image": "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
    "price": 1950,
    "location": "Sydney",
    "country": "Australia"
  },
  {
    "title": "Coastal Family Villa",
    "description": "Spacious villa made for group stays near the shoreline.",
    "image": "https://images.unsplash.com/photo-1615571022219-eb45cf7faa9d?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
    "price": 4200,
    "location": "Nice",
    "country": "France"
  },
  {
    "title": "Riverside Tiny House",
    "description": "Small footprint stay with smart design and river views.",
    "image": "https://images.unsplash.com/photo-1517541866997-ea18e32ea9e9?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
    "price": 850,
    "location": "Ljubljana",
    "country": "Slovenia"
  },
  {
    "title": "Luxury Ski Lodge",
    "description": "Premium lodge with mountain views and after-ski comfort.",
    "image": "https://images.unsplash.com/photo-1721369483526-62f48a00b949?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
    "price": 3900,
    "location": "Whistler",
    "country": "Canada"
  },
  {
    "title": "Boutique Hotel Suite",
    "description": "Polished suite with boutique styling and central location.",
    "image": "https://images.unsplash.com/photo-1528913775512-624d24b27b96?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
    "price": 2400,
    "location": "Milan",
    "country": "Italy"
  },
  {
    "title": "Sunset Beach Villa",
    "description": "Bright villa where every evening ends with an ocean sunset.",
    "image": "https://images.unsplash.com/photo-1605549339992-83721992836e?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
    "price": 4100,
    "location": "Punta Cana",
    "country": "Dominican Republic"
  },
  {
    "title": "Contemporary Courtyard Home",
    "description": "Quiet home built around a private courtyard and natural light.",
    "image": "https://images.unsplash.com/photo-1544143086-828f66ac3945?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
    "price": 1750,
    "location": "Lisbon",
    "country": "Portugal"
  },
  {
    "title": "Mediterranean Terrace Stay",
    "description": "Terrace apartment with warm light and a relaxed coastal feel.",
    "image": "https://images.unsplash.com/photo-1597211833712-5e41faa202ea?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
    "price": 1650,
    "location": "Split",
    "country": "Croatia"
  },
  {
    "title": "Elegant Canal House",
    "description": "Classic house on the water with refined interiors.",
    "image": "https://images.unsplash.com/photo-1510608658071-c48be9a076f6?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
    "price": 3100,
    "location": "Amsterdam",
    "country": "Netherlands"
  },
  {
    "title": "Highland Cottage",
    "description": "Remote cottage with open skies, hills, and complete quiet.",
    "image": "https://images.unsplash.com/photo-1511840636560-acee95b3a83f?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
    "price": 1150,
    "location": "Inverness",
    "country": "United Kingdom"
  },
  {
    "title": "Palm Grove Bungalow",
    "description": "Relaxed bungalow surrounded by palms and tropical air.",
    "image": "https://images.unsplash.com/photo-1511840831832-3efd661c1d0f?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
    "price": 1900,
    "location": "Mombasa",
    "country": "Kenya"
  },
  {
    "title": "Urban Skyline Flat",
    "description": "Modern flat with glass walls and city skyline views.",
    "image": "https://images.unsplash.com/photo-1433477303177-8270baa12c9a?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
    "price": 2300,
    "location": "Chicago",
    "country": "United States"
  },
  {
    "title": "Artisan Loft",
    "description": "Creative loft with bold textures and open-plan living.",
    "image": "https://images.unsplash.com/photo-1597475681177-809cfdc76cd2?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
    "price": 2050,
    "location": "Mexico City",
    "country": "Mexico"
  },
  {
    "title": "Secluded Cliff House",
    "description": "Private house on the edge of the coast with dramatic views.",
    "image": "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
    "price": 5300,
    "location": "Auckland",
    "country": "New Zealand"
  },
  {
    "title": "Garden Cottage",
    "description": "Quiet cottage with a private garden and soft natural light.",
    "image": "https://images.unsplash.com/photo-1615571022219-eb45cf7faa9d?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
    "price": 1200,
    "location": "Cotswolds",
    "country": "United Kingdom"
  },
  {
    "title": "Executive Apartment",
    "description": "Clean executive stay with premium furnishing and fast access to business hubs.",
    "image": "https://images.unsplash.com/photo-1517541866997-ea18e32ea9e9?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
    "price": 2800,
    "location": "Dubai",
    "country": "UAE"
  },
  {
    "title": "Eco Retreat Cabin",
    "description": "Sustainable cabin designed for slow mornings and offline time.",
    "image": "https://images.unsplash.com/photo-1721369483526-62f48a00b949?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
    "price": 1500,
    "location": "Costa Rica",
    "country": "Costa Rica"
  },
  {
    "title": "Lagoon Side Villa",
    "description": "Luxury villa steps from calm water and palm-lined paths.",
    "image": "https://images.unsplash.com/photo-1528913775512-624d24b27b96?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
    "price": 4600,
    "location": "Zanzibar",
    "country": "Tanzania"
  },
  {
    "title": "Panoramic Rooftop Suite",
    "description": "Suite with rooftop views and a sharp, modern interior.",
    "image": "https://images.unsplash.com/photo-1605549339992-83721992836e?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
    "price": 3700,
    "location": "Hong Kong",
    "country": "China"
  },
  {
    "title": "Old Town Loft",
    "description": "Loft in the historic district with walkable streets outside.",
    "image": "https://images.unsplash.com/photo-1544143086-828f66ac3945?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
    "price": 1850,
    "location": "Prague",
    "country": "Czech Republic"
  },
  {
    "title": "Private Beach House",
    "description": "Standalone beach house with space, privacy, and uninterrupted views.",
    "image": "https://images.unsplash.com/photo-1597211833712-5e41faa202ea?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
    "price": 5200,
    "location": "Gold Coast",
    "country": "Australia"
  },
  {
    "title": "Clifftop Eco Villa",
    "description": "Eco-minded villa set above the shoreline for a dramatic stay.",
    "image": "https://images.unsplash.com/photo-1510608658071-c48be9a076f6?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
    "price": 4400,
    "location": "Madeira",
    "country": "Portugal"
  },
  {
    "title": "Marina View Apartment",
    "description": "Bright apartment looking over the marina and harbor lights.",
    "image": "https://images.unsplash.com/photo-1511840636560-acee95b3a83f?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
    "price": 2150,
    "location": "Dubrovnik",
    "country": "Croatia"
  },
  {
    "title": "Serene Waterside Cottage",
    "description": "Cottage right by the water with a calm and restful feel.",
    "image": "https://images.unsplash.com/photo-1511840831832-3efd661c1d0f?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
    "price": 1380,
    "location": "Maine",
    "country": "United States"
  },
  {
    "title": "Grand Regency Hotel",
    "description": "A five-star hotel offering elegant rooms, rooftop dining, and panoramic city views.",
    "image": "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
    "price": 900,
    "location": "Dubai",
    "country": "UAE"
  },
  {
    "title": "The Meridian Hotel",
    "description": "Beachfront hotel with private cabanas, an infinity pool, and full-service spa.",
    "image": "https://picsum.photos/seed/the-meridian-hotel-paris/1200/800",
    "price": 1037,
    "location": "Paris",
    "country": "France"
  },
  {
    "title": "Ocean Pearl Resort & Spa",
    "description": "Business-class hotel featuring modern conference facilities and skyline suites.",
    "image": "https://picsum.photos/seed/ocean-pearl-resort-spa-newyork/1200/800",
    "price": 1174,
    "location": "New York",
    "country": "United States"
  },
  {
    "title": "Skyline Tower Hotel",
    "description": "Boutique hotel blending contemporary design with warm, personalized service.",
    "image": "https://images.unsplash.com/photo-1721369483526-62f48a00b949?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
    "price": 1311,
    "location": "Singapore",
    "country": "Singapore"
  },
  {
    "title": "The Ivory Palace Hotel",
    "description": "Luxury resort hotel with multiple pools, fine dining, and a private beach.",
    "image": "https://picsum.photos/seed/the-ivory-palace-hotel-tokyo/1200/800",
    "price": 1448,
    "location": "Tokyo",
    "country": "Japan"
  },
  {
    "title": "Sapphire Bay Resort",
    "description": "Historic hotel restored with modern comforts and classic architectural charm.",
    "image": "https://picsum.photos/seed/sapphire-bay-resort-london/1200/800",
    "price": 1585,
    "location": "London",
    "country": "United Kingdom"
  },
  {
    "title": "Golden Crown Hotel",
    "description": "Family-friendly hotel with spacious suites, a kids' club, and on-site dining.",
    "image": "https://images.unsplash.com/photo-1544143086-828f66ac3945?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
    "price": 1722,
    "location": "Bali",
    "country": "Indonesia"
  },
  {
    "title": "The Aurelia Hotel",
    "description": "Downtown hotel steps from major attractions, shopping, and nightlife.",
    "image": "https://picsum.photos/seed/the-aurelia-hotel-rome/1200/800",
    "price": 1859,
    "location": "Rome",
    "country": "Italy"
  },
  {
    "title": "Emerald Coast Resort",
    "description": "Wellness-focused resort hotel with yoga decks, spa treatments, and healthy dining.",
    "image": "https://picsum.photos/seed/emerald-coast-resort-barcelona/1200/800",
    "price": 1996,
    "location": "Barcelona",
    "country": "Spain"
  },
  {
    "title": "The Continental Hotel",
    "description": "Airport-adjacent hotel offering comfortable stays for business and layover travelers.",
    "image": "https://images.unsplash.com/photo-1511840636560-acee95b3a83f?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
    "price": 2133,
    "location": "Bangkok",
    "country": "Thailand"
  },
  {
    "title": "Silverline Suites Hotel",
    "description": "Mountain-view hotel with a heated pool, fireplace lounge, and ski-in access.",
    "image": "https://picsum.photos/seed/silverline-suites-hotel-sydney/1200/800",
    "price": 2270,
    "location": "Sydney",
    "country": "Australia"
  },
  {
    "title": "The Regal Orchid Hotel",
    "description": "Resort hotel set in tropical gardens with swim-up bar and beach cabanas.",
    "image": "https://picsum.photos/seed/the-regal-orchid-hotel-capetown/1200/800",
    "price": 2407,
    "location": "Cape Town",
    "country": "South Africa"
  },
  {
    "title": "Sunset Horizon Resort",
    "description": "Modern high-rise hotel with floor-to-ceiling windows and rooftop bar.",
    "image": "https://images.unsplash.com/photo-1597475681177-809cfdc76cd2?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
    "price": 2544,
    "location": "Istanbul",
    "country": "Turkey"
  },
  {
    "title": "The Windsor Grand Hotel",
    "description": "Charming countryside hotel with vineyard views and farm-to-table dining.",
    "image": "https://picsum.photos/seed/the-windsor-grand-hotel-maldives/1200/800",
    "price": 2681,
    "location": "Maldives",
    "country": "Maldives"
  },
  {
    "title": "Marina Bay Boutique Hotel",
    "description": "Waterfront hotel with marina views, yacht charter desk, and seafood restaurant.",
    "image": "https://picsum.photos/seed/marina-bay-boutique-hotel-hongkong/1200/800",
    "price": 2818,
    "location": "Hong Kong",
    "country": "China"
  },
  {
    "title": "The Imperial Heights Hotel",
    "description": "Design-forward hotel with curated art, a rooftop pool, and cocktail lounge.",
    "image": "https://images.unsplash.com/photo-1517541866997-ea18e32ea9e9?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
    "price": 2955,
    "location": "Vienna",
    "country": "Austria"
  },
  {
    "title": "Azure Waters Resort & Spa",
    "description": "Grand heritage hotel known for its ballroom, gardens, and afternoon tea service.",
    "image": "https://picsum.photos/seed/azure-waters-resort-spa-amsterdam/1200/800",
    "price": 3092,
    "location": "Amsterdam",
    "country": "Netherlands"
  },
  {
    "title": "The Baldwin Hotel",
    "description": "All-inclusive resort hotel with multiple restaurants and a private lagoon.",
    "image": "https://picsum.photos/seed/the-baldwin-hotel-riodejaneiro/1200/800",
    "price": 3229,
    "location": "Rio de Janeiro",
    "country": "Brazil"
  },
  {
    "title": "Crescent Moon Palace Hotel",
    "description": "Compact urban hotel offering efficient rooms close to transit and business districts.",
    "image": "https://images.unsplash.com/photo-1605549339992-83721992836e?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
    "price": 3366,
    "location": "Cancun",
    "country": "Mexico"
  },
  {
    "title": "The Harborview Hotel",
    "description": "Ski resort hotel with slope-side access, hot tubs, and alpine dining.",
    "image": "https://picsum.photos/seed/the-harborview-hotel-seoul/1200/800",
    "price": 3503,
    "location": "Seoul",
    "country": "South Korea"
  },
  {
    "title": "Opal Gardens Resort",
    "description": "A five-star hotel offering elegant rooms, rooftop dining, and panoramic city views.",
    "image": "https://picsum.photos/seed/opal-gardens-resort-lisbon/1200/800",
    "price": 3640,
    "location": "Lisbon",
    "country": "Portugal"
  },
  {
    "title": "The Ambassador Hotel",
    "description": "Beachfront hotel with private cabanas, an infinity pool, and full-service spa.",
    "image": "https://images.unsplash.com/photo-1510608658071-c48be9a076f6?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
    "price": 3777,
    "location": "Marrakech",
    "country": "Morocco"
  },
  {
    "title": "Lotus Retreat Hotel & Spa",
    "description": "Business-class hotel featuring modern conference facilities and skyline suites.",
    "image": "https://picsum.photos/seed/lotus-retreat-hotel-spa-prague/1200/800",
    "price": 3914,
    "location": "Prague",
    "country": "Czech Republic"
  },
  {
    "title": "The Sterling Hotel",
    "description": "Boutique hotel blending contemporary design with warm, personalized service.",
    "image": "https://picsum.photos/seed/the-sterling-hotel-vancouver/1200/800",
    "price": 4051,
    "location": "Vancouver",
    "country": "Canada"
  },
  {
    "title": "Coral Reef Grand Resort",
    "description": "Luxury resort hotel with multiple pools, fine dining, and a private beach.",
    "image": "https://images.unsplash.com/photo-1433477303177-8270baa12c9a?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
    "price": 4188,
    "location": "Zurich",
    "country": "Switzerland"
  },
  {
    "title": "The Excelsior Hotel",
    "description": "Historic hotel restored with modern comforts and classic architectural charm.",
    "image": "https://picsum.photos/seed/the-excelsior-hotel-doha/1200/800",
    "price": 4325,
    "location": "Doha",
    "country": "Qatar"
  },
  {
    "title": "Whitestone Manor Hotel",
    "description": "Family-friendly hotel with spacious suites, a kids' club, and on-site dining.",
    "image": "https://picsum.photos/seed/whitestone-manor-hotel-mumbai/1200/800",
    "price": 4462,
    "location": "Mumbai",
    "country": "India"
  },
  {
    "title": "The Riviera Grand Hotel",
    "description": "Downtown hotel steps from major attractions, shopping, and nightlife.",
    "image": "https://images.unsplash.com/photo-1615571022219-eb45cf7faa9d?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
    "price": 4599,
    "location": "Kuala Lumpur",
    "country": "Malaysia"
  },
  {
    "title": "Palm Terrace Resort",
    "description": "Wellness-focused resort hotel with yoga decks, spa treatments, and healthy dining.",
    "image": "https://picsum.photos/seed/palm-terrace-resort-athens/1200/800",
    "price": 4736,
    "location": "Athens",
    "country": "Greece"
  },
  {
    "title": "The Kensington Hotel",
    "description": "Airport-adjacent hotel offering comfortable stays for business and layover travelers.",
    "image": "https://picsum.photos/seed/the-kensington-hotel-reykjavik/1200/800",
    "price": 4873,
    "location": "Reykjavik",
    "country": "Iceland"
  },
  {
    "title": "Midnight Blue Boutique Hotel",
    "description": "Mountain-view hotel with a heated pool, fireplace lounge, and ski-in access.",
    "image": "https://images.unsplash.com/photo-1528913775512-624d24b27b96?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
    "price": 5010,
    "location": "Buenos Aires",
    "country": "Argentina"
  },
  {
    "title": "The Fairmont Ridge Hotel",
    "description": "Resort hotel set in tropical gardens with swim-up bar and beach cabanas.",
    "image": "https://picsum.photos/seed/the-fairmont-ridge-hotel-nairobi/1200/800",
    "price": 5147,
    "location": "Nairobi",
    "country": "Kenya"
  },
  {
    "title": "Diamond Shore Resort",
    "description": "Modern high-rise hotel with floor-to-ceiling windows and rooftop bar.",
    "image": "https://picsum.photos/seed/diamond-shore-resort-auckland/1200/800",
    "price": 5284,
    "location": "Auckland",
    "country": "New Zealand"
  },
  {
    "title": "The Metropolitan Hotel",
    "description": "Charming countryside hotel with vineyard views and farm-to-table dining.",
    "image": "https://images.unsplash.com/photo-1597211833712-5e41faa202ea?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
    "price": 5421,
    "location": "Copenhagen",
    "country": "Denmark"
  },
  {
    "title": "Willow Creek Lodge Hotel",
    "description": "Waterfront hotel with marina views, yacht charter desk, and seafood restaurant.",
    "image": "https://picsum.photos/seed/willow-creek-lodge-hotel-edinburgh/1200/800",
    "price": 5558,
    "location": "Edinburgh",
    "country": "United Kingdom"
  },
  {
    "title": "The Grandview Palace",
    "description": "Design-forward hotel with curated art, a rooftop pool, and cocktail lounge.",
    "image": "https://picsum.photos/seed/the-grandview-palace-miami/1200/800",
    "price": 5695,
    "location": "Miami",
    "country": "United States"
  },
  {
    "title": "Turquoise Bay Resort & Spa",
    "description": "Grand heritage hotel known for its ballroom, gardens, and afternoon tea service.",
    "image": "https://images.unsplash.com/photo-1511840831832-3efd661c1d0f?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
    "price": 5832,
    "location": "Santorini",
    "country": "Greece"
  },
  {
    "title": "The Camden Hotel",
    "description": "All-inclusive resort hotel with multiple restaurants and a private lagoon.",
    "image": "https://picsum.photos/seed/the-camden-hotel-phuket/1200/800",
    "price": 5969,
    "location": "Phuket",
    "country": "Thailand"
  },
  {
    "title": "Northern Lights Grand Hotel",
    "description": "Compact urban hotel offering efficient rooms close to transit and business districts.",
    "image": "https://picsum.photos/seed/northern-lights-grand-hotel-dublin/1200/800",
    "price": 6106,
    "location": "Dublin",
    "country": "Ireland"
  },
  {
    "title": "The Belmont Hotel",
    "description": "Ski resort hotel with slope-side access, hot tubs, and alpine dining.",
    "image": "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
    "price": 6243,
    "location": "Berlin",
    "country": "Germany"
  },
  {
    "title": "Ruby Sands Resort",
    "description": "A five-star hotel offering elegant rooms, rooftop dining, and panoramic city views.",
    "image": "https://picsum.photos/seed/ruby-sands-resort-venice/1200/800",
    "price": 6380,
    "location": "Venice",
    "country": "Italy"
  },
  {
    "title": "The Castleview Hotel",
    "description": "Beachfront hotel with private cabanas, an infinity pool, and full-service spa.",
    "image": "https://picsum.photos/seed/the-castleview-hotel-osaka/1200/800",
    "price": 917,
    "location": "Osaka",
    "country": "Japan"
  },
  {
    "title": "Cascade Falls Boutique Hotel",
    "description": "Business-class hotel featuring modern conference facilities and skyline suites.",
    "image": "https://images.unsplash.com/photo-1721369483526-62f48a00b949?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
    "price": 1054,
    "location": "Havana",
    "country": "Cuba"
  },
  {
    "title": "The Hamilton Grand",
    "description": "Boutique hotel blending contemporary design with warm, personalized service.",
    "image": "https://picsum.photos/seed/the-hamilton-grand-jaipur/1200/800",
    "price": 1191,
    "location": "Jaipur",
    "country": "India"
  },
  {
    "title": "Onyx Skyline Hotel",
    "description": "Luxury resort hotel with multiple pools, fine dining, and a private beach.",
    "image": "https://picsum.photos/seed/onyx-skyline-hotel-muscat/1200/800",
    "price": 1328,
    "location": "Muscat",
    "country": "Oman"
  },
  {
    "title": "The Waverly Hotel",
    "description": "Historic hotel restored with modern comforts and classic architectural charm.",
    "image": "https://images.unsplash.com/photo-1544143086-828f66ac3945?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
    "price": 1465,
    "location": "Stockholm",
    "country": "Sweden"
  },
  {
    "title": "Pearl Harbor View Resort",
    "description": "Family-friendly hotel with spacious suites, a kids' club, and on-site dining.",
    "image": "https://picsum.photos/seed/pearl-harbor-view-resort-toronto/1200/800",
    "price": 1602,
    "location": "Toronto",
    "country": "Canada"
  },
  {
    "title": "The Kingston Hotel",
    "description": "Downtown hotel steps from major attractions, shopping, and nightlife.",
    "image": "https://picsum.photos/seed/the-kingston-hotel-borabora/1200/800",
    "price": 1739,
    "location": "Bora Bora",
    "country": "French Polynesia"
  },
  {
    "title": "Velvet Orchid Grand Hotel",
    "description": "Wellness-focused resort hotel with yoga decks, spa treatments, and healthy dining.",
    "image": "https://images.unsplash.com/photo-1511840636560-acee95b3a83f?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
    "price": 1876,
    "location": "Nice",
    "country": "France"
  },
  {
    "title": "The Prescott Hotel",
    "description": "Airport-adjacent hotel offering comfortable stays for business and layover travelers.",
    "image": "https://picsum.photos/seed/the-prescott-hotel-cairo/1200/800",
    "price": 2013,
    "location": "Cairo",
    "country": "Egypt"
  }
]
module.exports = { data: sampleListings };