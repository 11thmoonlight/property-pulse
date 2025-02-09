import connectDB from "@/config/database";
import Property from "@/models/Property";

// GET /api/properties/search
export const GET = async (request) => {
  try {
    await connectDB();
    const { searchParams } = new URL(Request.url);
    const location = searchParams.get("location");
    const propertyType = searchParams.get("propertyType");

    const locationPattern = new RegExp(location, "i");

    //Match location patterns against database fields
    let query = {
      $or: [
        { name: locationPattern },
        { description: locationPattern },
        { "location.street": locationPattern },
        { "location.state": locationPattern },
        { "location.city": locationPattern },
        { "location.zipcode": locationPattern },
      ],
    };

    // Only check for property if it is not 'All'
    if (propertyType && propertyType !== "All") {
      const typePattern = new RegExp(propertyType, "i");
      query.type = typePattern;
    }

    const properties = await Property.find(query);

    return new Response(JSON.stringify(properties), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response("Something went wrong", { status: 500 });
  }
};
