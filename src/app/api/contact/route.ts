import dbConnect from '@/lib/dbconnect';
import contact from '@/models/contact';
import { NextRequest, NextResponse } from 'next/server';


export async function POST(request: NextRequest) {
    try {
        // Connect to the database
        await dbConnect();

        // Parse the request body
        const body = await request.json();

        // Validate required fields
        if (!body.name || !body.phone) {
            return NextResponse.json(
                { success: false, message: 'Name and number are required fields' },
                { status: 400 }
            );
        }

        // Create a new contact document
        const result = await contact.create({
            name: body.name,
            email: body.email,
            phone: body.phone
        });

        // Return success response
        return NextResponse.json(
            {
                success: true,
                message: 'Contact submitted successfully',
                data: result
            },
            { status: 201 }
        );

    } catch (error) {
        console.error('Error saving contact:', error);

        return NextResponse.json(
            { success: false, message: 'Failed to save contact information' },
            { status: 500 }
        );
    }
}
