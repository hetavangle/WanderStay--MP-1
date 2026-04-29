const sampleListings =[
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
  }
]
module.exports = { data: sampleListings };