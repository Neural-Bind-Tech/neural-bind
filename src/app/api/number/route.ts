import dbConnect from '@/lib/dbconnect';
import number from '@/models/number';

import { NextRequest, NextResponse } from 'next/server';


export async function POST(request: NextRequest) {
    try {
        // Connect to the database
        await dbConnect();

        // Parse the request body
        const body = await request.json();

        // Validate required fields
        if (!body.number) {
            return NextResponse.json(
                { success: false, message: 'Number are required fields' },
                { status: 400 }
            );
        }

        // Create a new contact document
        const result = await number.create({
            number: body.number
        });

        // Return success response
        return NextResponse.json(
            {
                success: true,
                message: 'Number submitted successfully',
                data: result
            },
            { status: 201 }
        );

    } catch (error) {
        console.error('Error saving contact:', error);

        return NextResponse.json(
            { success: false, message: 'Failed to save Number information' },
            { status: 500 }
        );
    }
}
