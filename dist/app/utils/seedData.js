"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedData = void 0;
const member_model_1 = require("../modules/members/member.model");
const event_model_1 = require("../modules/events/event.model");
const ad_model_1 = require("../modules/ads/ad.model");
const gallery_model_1 = require("../modules/gallery/gallery.model");
const seedData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Check if data already exists
        const memberCount = yield member_model_1.Member.countDocuments();
        if (memberCount > 0) {
            console.log("Demo data already exists. Skipping seeding.");
            return;
        }
        console.log("Seeding demo data...");
        // Seed Members
        const members = yield member_model_1.Member.insertMany([
            {
                name: "Dr. Mohammed Rahman",
                phone: "+1 (313) 555-0100",
                email: "m.rahman@gcam.org",
                role: "Executive",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
                bio: "President and founder of GCAM. Leading the community for 15 years.",
                chapter: "Michigan Chapter",
                tag: "Founder & President",
            },
            {
                name: "Fatima Ahmed Khan",
                phone: "+1 (313) 555-0101",
                email: "fatima@gcam.org",
                role: "Advisory",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
                bio: "Community outreach coordinator. Passionate about education.",
                chapter: "Michigan Chapter",
                tag: "Outreach Lead",
            },
            {
                name: "Ahmed Hassan",
                phone: "+1 (313) 555-0102",
                email: "ahmed@gcam.org",
                role: "Executive",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
                bio: "Treasurer and financial advisor.",
                chapter: "Michigan Chapter",
                tag: "Treasurer",
            },
            {
                name: "Nadia Begum",
                phone: "+1 (313) 555-0103",
                email: "nadia@gcam.org",
                role: "General",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
                bio: "Community volunteer and event organizer.",
                chapter: "Michigan Chapter",
                tag: "Volunteer",
            },
            {
                name: "Karim Uddin",
                phone: "+1 (313) 555-0104",
                email: "karim@gcam.org",
                role: "General",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
                bio: "Sports coordinator and youth mentor.",
                chapter: "Michigan Chapter",
                tag: "Sports Lead",
            },
        ]);
        console.log(`✓ Created ${members.length} members`);
        // Seed Events
        const events = yield event_model_1.Event.insertMany([
            {
                title: "Eid-ul-Fitr Community Celebration",
                date: "2026-04-10",
                time: "6:00 PM - 10:00 PM",
                location: "Heritage Hall, Detroit",
                description: "Join us for a grand Eid celebration with traditional food, cultural performances, and community gathering.",
                image: "https://images.unsplash.com/photo-1540575467063-178f50002ef5?w=600&q=80",
                category: "Religious",
            },
            {
                title: "Pohela Boishakh Festival",
                date: "2026-04-14",
                time: "2:00 PM - 8:00 PM",
                location: "Ford Field, Detroit",
                description: "Celebrate the Bengali New Year with traditional music, dance, food, and cultural exhibitions.",
                image: "https://images.unsplash.com/photo-1533281214515-cf30ebfc5fd2?w=600&q=80",
                category: "Cultural",
            },
            {
                title: "Youth Sports Tournament",
                date: "2026-05-15",
                time: "9:00 AM - 6:00 PM",
                location: "Warren Sports Complex",
                description: "Annual sports event featuring cricket, badminton, and soccer. All ages welcome!",
                image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&q=80",
                category: "Sports",
            },
            {
                title: "Community Iftar Dinner",
                date: "2026-03-20",
                time: "7:00 PM - 9:00 PM",
                location: "Community Center, Dearborn",
                description: "Breaking fast together. Free meals for all community members during Ramadan.",
                image: "https://images.unsplash.com/photo-1555939594-58d7cb561841?w=600&q=80",
                category: "Religious",
            },
            {
                title: "Language & Culture Workshop",
                date: "2026-06-05",
                time: "10:00 AM - 12:00 PM",
                location: "GCAM Office",
                description: "Learn Bengali language, history, and traditions. Perfect for children and adults.",
                image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80",
                category: "Community",
            },
        ]);
        console.log(`✓ Created ${events.length} events`);
        // Seed Ads
        const ads = yield ad_model_1.Ad.insertMany([
            {
                sponsorName: "GCAM Grocery Mart",
                description: "Quality halal products and ethnic groceries for the community.",
                image: "https://images.unsplash.com/photo-1552635359-bbf239df0337?w=200&q=80",
                link: "https://gcamgrocery.com",
                type: "card",
            },
            {
                sponsorName: "Desh Restaurant",
                description: "Authentic Bengali cuisine and catering services available.",
                image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200&q=80",
                link: "https://deshrestaurant.com",
                type: "card",
            },
            {
                sponsorName: "Michigan Islamic Foundation",
                description: "Supporting Islamic education and community services.",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&q=80",
                link: "https://michiganislamic.org",
                type: "banner",
            },
            {
                sponsorName: "Bengali Heritage School",
                description: "Teaching language, history, and culture to the next generation.",
                image: "https://images.unsplash.com/photo-1427504494785-cdecf57b76a9?w=200&q=80",
                link: "https://bengaliheritage.edu",
                type: "card",
            },
            {
                sponsorName: "Community Health Clinic",
                description: "Healthcare services with cultural sensitivity for all.",
                image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=200&q=80",
                link: "https://communityhealthclinic.com",
                type: "card",
            },
        ]);
        console.log(`✓ Created ${ads.length} advertisements`);
        // Seed Gallery Categories
        const categories = yield gallery_model_1.Category.insertMany([
            { name: "Eid Celebrations 2025" },
            { name: "Pohela Boishakh 2025" },
            { name: "Community Events" },
            { name: "Youth Programs" },
            { name: "Ramadan 2025" },
        ]);
        console.log(`✓ Created ${categories.length} gallery categories`);
        // Seed Gallery Images
        const galleryImages = yield gallery_model_1.Gallery.insertMany([
            {
                categoryId: categories[0]._id,
                imageUrls: [
                    "https://images.unsplash.com/photo-1540575467063-178f50002ef5?w=400&q=80",
                    "https://images.unsplash.com/photo-1519167534503-c5c28e4304c8?w=400&q=80",
                    "https://images.unsplash.com/photo-1469371670828-998a42fc5534?w=400&q=80",
                ],
            },
            {
                categoryId: categories[1]._id,
                imageUrls: [
                    "https://images.unsplash.com/photo-1533281214515-cf30ebfc5fd2?w=400&q=80",
                    "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&q=80",
                    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&q=80",
                ],
            },
            {
                categoryId: categories[2]._id,
                imageUrls: [
                    "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=400&q=80",
                    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&q=80",
                    "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&q=80",
                ],
            },
            {
                categoryId: categories[3]._id,
                imageUrls: [
                    "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&q=80",
                    "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&q=80",
                    "https://images.unsplash.com/photo-1517836357463-d25ddfcb2fbb?w=400&q=80",
                ],
            },
            {
                categoryId: categories[4]._id,
                imageUrls: [
                    "https://images.unsplash.com/photo-1555939594-58d7cb561841?w=400&q=80",
                    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80",
                    "https://images.unsplash.com/photo-1504674900969-f2efd9e12f77?w=400&q=80",
                ],
            },
        ]);
        console.log(`✓ Created ${galleryImages.length} gallery image sets`);
        console.log("\n✅ Demo data seeding completed successfully!");
    }
    catch (error) {
        console.error("Error seeding demo data:", error);
    }
});
exports.seedData = seedData;
//# sourceMappingURL=seedData.js.map