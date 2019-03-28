# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Park.destroy_all
park1 = Park.create!({
        full_name: "Banff National Park",
        name: "Banff",
        country: "Canada",
        prov_state: "Alberta",
        lat: 51.1667,
        long: -115.55,
      description: "Canada's oldest national park and was established in 1885.  Located in the Rocky Mountains, 110–180 kilometres (68–112 mi) west of Calgary in the province of Alberta, Banff encompasses 6,641 square kilometres (2,564 sq mi)[2] of mountainous terrain, with numerous glaciers and ice fields, dense coniferous forest, and alpine landscapes",
        url: "https://www.pc.gc.ca/en/pn-np/ab/banff", 
        established: 1885,
        unesco: true
    })

park2 = Park.create({
            full_name: "Waterton Lakes National Park",
            name:"Waterton Lakes",
            country: "Canada",
            prov_state:"Alberta",
            lat: 49.0833,
            long: -113.8667,
          description: "The prairies of Alberta meet the peaks of the Rocky Mountains in Waterton Lakes National Park. This beautiful landscape was impacted by a wildfire in September 2017, resulting in areas of the park being closed to the public.",
            url: "https://www.pc.gc.ca/en/pn-np/ab/waterton",
            established: 1885,
            unesco: true
        })   
park3 = Park.create({
                full_name: "Jasper National Park",
                name: "Jasper",
                country: "Canada",
                prov_state: "Alberta",
                lat:52.8731,
                long: -118.0823,
              description:"Extending over 11,000 square kilometres, it's the largest national park in the Canadian Rockies. Find your connection to this special place by discovering one or all of our five spectacular regions by exploring our extensive trail network.",
                url:"https://www.pc.gc.ca/en/pn-np/ab/jasper",
                established: 1907,
                unesco: true
            })   
park4 = Park.create({
                full_name: "Yoho National Park",                    name: "Yoho",
                country: "Canada",
                prov_state: "British Columbia",
                lat: 51.3666,
                long: -116.5485,
              description: "Yoho covers 1,313 km2 (507 mi2) and it is the smallest of the four contiguous national parks.",
                url: "https://www.pc.gc.ca/en/pn-np/bc/yoho",
                established: 1886,
                unesco: true
            })   
 park5 = Park.create!({
                  full_name: "Glacier National Park Of Canada",
                  name: "Glacier",
                  country: "Canada",
                  prov_state: "British Columbia",
                  lat: 51.267,
                  long: -117.517,
                description: "http://www.pc.gc.ca/eng/pn-np/bc/glacier/index.aspx",
                  url: "https://www.pc.gc.ca/en/pn-np/bc/glacier",
                  established: 1886,
                  unesco: false
})   
park6 = Park.create!({
                        full_name: "Elk Island National Park",
                        name: "Elk Island",
                        country: "Canada",
                        prov_state: "Alberta",
                        lat: 53.5928,
                        long: -112.8708,
                      description: "Just 35 minutes east of Edmonton lies a natural wonderland open all year long! Spread a blanket and gaze at a starry sky free from city lights or follow the footprints of a bison and learn how this magnificent animal was brought back from near extinction. In addition to being an important refuge for bison, elk and more than 250 bird species.",
                        url: "https://www.pc.gc.ca/en/pn-np/ab/elkisland",
                        established: 1913,
                        unesco: false
 })   
 park7 = Park.create({
                       full_name: "Mount Revelstoke National Park",
                       name: "Mount Revelstoke",
                       country: "Canada",
                       prov_state: "British Columbia",
                       lat: 51.092604,
                       long: -118.042224,
                     description: "Take a cool stroll through a lush rainforest on a hot summer day. Stand at the point of no return, where champions once launched themselves down a world-famous ski jump, and imagine the thrill of flight. Climb the only mountain in the national park system that you can summit just a short walk from your car – all at Mount Revelstoke National Park.",
                       url: "https://www.pc.gc.ca/en/pn-np/bc/revelstoke",
                       established: 1914,
                       unesco: false
})
park8 = Park.create!({
                             full_name: "Thousand Islands National Park",
                             name: "Thousand Islands",
                             country: "Canada",
                             prov_state: "Ontario",
                             lat: 44.3339,
                             long: -75.9948,
                           description: "Journey to the picturesque granite islands and windswept pine trees of Thousand Islands National Park. Discover rare species of turtles and birdlife alongside undulating hiking trails.",
                             url: "https://www.pc.gc.ca/en/pn-np/on/1000",
                             established: 1904,
                             unesco: false 
})
 park9 = Park.create!({
    full_name: "Point Pelee National Park",
    name: "Point Pelee",
    country: "Canada",
    prov_state: "Ontario",
    lat: 41.9642,
    long: -82.5178,
  description: "At the southernmost point of the Canadian mainland - Point Pelee National Park, experience nature like never before. Whether you cycle, paddle or hike Canada’s smallest but most ecologically diverse national park, you’ll be immersed in an unforgettable eco-adventure.",
    url: "https://www.pc.gc.ca/en/pn-np/on/pelee",
    established: 1987,
    unesco: false
})









park10 = Park.create(
    {
        full_name: "Prince Edward Island National Park",
        name: "Prince Edward Island",
        country: "Canada",
        prov_state: "Prince Edward Island",
        lat: 46.415714,
        long: -63.073203,
      description: "Gentle surf strokes sandy beaches alongside red cliffs and wind-sculpted dunes. Cycle a seashore path, savour a picnic by a lighthouse and spot heron wading in coastal bays. Hike woodlands and overlook ponds watching for red fox, waterfowl and warblers, then head to one of many beaches to build spectacular sandcastles. ",
        url:"https://www.pc.gc.ca/en/pn-np/pe/pei-ipe",
        established: 1937,
        unesco: false
    }
    )

    park11 = Park.create({
        full_name: "Cape Breton Highlands National Park",
        name: "Cape Breton Highlands",
        country: "Canada",
        prov_state: "Nova Scotia",
        lat: 46.81351,
        long: -60.768602,
      description: "One of Canada’s most enchanting places, where the mountains meet the sea. As you hug the world-famous Cabot Trail coastline you'll wind through Cape Breton Highlands National Park, where lush, forested river canyons carve into the ancient plateau, edged by rust-coloured cliffs.",
        url: "https://www.pc.gc.ca/en/pn-np/ns/cbreton",
        established: 1936,
        unesco: false
    })    
    
    park12 = Park.create({
        full_name: "Georgian Bay Islands National Park",
        name: "Georgian Bay Islands",
        country: "Canada",
        prov_state: "Ontario",
        lat: 44.874317,
        long: -79.869955,
      description: "Welcome to the world’s largest freshwater archipelago—home to a boat-access nature preserve situated where the windswept white pines and granite shores of the Canadian Shield turn to dense deciduous woodland. Here, adventure is easy.",
        url: "https://www.pc.gc.ca/en/pn-np/on/georg",
        established: 1929,
        unesco: false
    }
    )
    park13 = Park.create(
        {
            full_name: "Wood Buffalo National Park",
            name: "Wood Buffalo",
            country: "Canada",
            prov_state: ["Alberta", "Northwest Territories"],
            lat: 59.3908,
            long: -112.9864,
          description: "Wood Buffalo National Park of Canada is our country's largest national park and one of the largest in the world. It was established in 1922 to protect the last remaining herds of bison in northern Canada. Today, it protects an outstanding and representative example of Canada's Northern Boreal Plains.",
            url: "https://www.pc.gc.ca/en/pn-np/nt/woodbuffalo",
            established: 1922,
            unesco: true  
        })
        park14 = Park.create(
            {
                full_name: "Prince Albert National Park",
                name: "Prince Albert",
                country: "Canada",
                prov_state: "Saskatchewan",
                lat: 53.9633,
                long: -106.37,
              description: "Whether your idea of adventure is portaging a canoe between remote forest lakes or a day of pulse-racing waterskiing and wakeboarding, Prince Albert National Park satisfies with a mix of wilderness and accessibility.",
                url: "https://www.pc.gc.ca/en/pn-np/sk/princealbert",
                established:1927,
                unesco: false  
            }
            
            )
            park15 = Park.create(
                {
                    full_name: "Riding Mountain National Park",
                    name: "Riding Mountain",
                    country: "Canada",
                    prov_state: "Manitoba",
                    lat: 50.8639,
                    long: -100.0361,
                  description: "Yellow goldenrods sway in prairie meadows and a gentle breeze blows through the aspen. Black bears pad along boreal trails and the piercing sound of elk bugling echoes around the forest. Visit Grey Owl’s historic cabin and see the enduring landmark of the East Gate",
                    url: "https://www.pc.gc.ca/en/pn-np/mb/riding",
                    established: 1933,
                    unesco: false
                }
                
                )   
                
              park16 = Park.create({
                    full_name: "Kootenay National Park",
                    name: "Kootenay",
                    country: "Canada",
                    prov_state: "British Columbia",
                    lat:  50.8831,
                    long: -116.0492,
                  description: "Established in 1920 as part of an agreement to build a new road across the Rockies, Kootenay National Park is a place of unique contrasts, from icy mountain rivers to steamy hot springs. Take a 60-minute scenic drive and discover a new surprise around every bend.",
                    url: "https://www.pc.gc.ca/en/pn-np/bc/kootenay",
                    established:1920,
                    unesco: true 
                })
                
                
                
                
                
                
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
    
    
    
    
    
    
    
    
    