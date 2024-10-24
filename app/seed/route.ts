import { seedDatabase } from '../lib/seed';

export async function GET() {
    try {
        await seedDatabase();
        return new Response(JSON.stringify({ message: 'Database seeded successfully!' }), {
            status: 200,
        });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: 'Failed to seed database' }), {
            status: 500,
        });
    }
}
