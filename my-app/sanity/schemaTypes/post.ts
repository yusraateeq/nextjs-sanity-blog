const post = {
    name: "post",
    title: "Post",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule: any) => Rule.required(),
        },

        {
            name: "metadata",
            title: "Metadata",
            type: "string",
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                unique: true,
                slugify: (input: string) => {
                    return input
                        .toLowerCase()
                        .replace(/\s+/g, "-")
                        .replace(/[^\w-]+/g, "");
                },
            },
            validation: (Rule: any) =>
                Rule.required().custom((fields: any) => {
                    if (
                        fields?.current !== fields?.current?.toLowerCase() ||
                        fields?.current.includes(" ")
                    ) {
                        return "Slug must be lowercase and should not include spaces";
                    }
                    return true;
                }),
        },
        {
            name: "tags",
            title: "Tags",
            type: "array",
            of: [
                {
                    type: "string",
                    validation: (Rule: any) =>
                        Rule.custom((field: string) => {
                            if (
                                field !== field.toLowerCase() ||
                                field.includes(" ")
                            ) {
                                return "Tags must be lowercase and should not include spaces";
                            }
                            return true;
                        }),
                },
            ],
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: "mainImage",
            title: "Main image",
            type: "image",
            options: {
                hotspot: true,
            },
            // validation: (Rule: any) => Rule.required(),
        },

        {
            name: "publishedAt",
            title: "Published at",
            type: "datetime",
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'content',
            type: 'array',
            title: 'Content',
            of: [{ type: 'block' }]
        },
        

    ],


    preview: {
        select: {
            title: "title",
            author: "author.name",
            media: "mainImage",
        },
        prepare(selection: any) {
            const { author } = selection;
            return Object.assign({}, selection, {
                subtitle: author && `by ${author}`,
            });
        },
    },

};




export default post;
