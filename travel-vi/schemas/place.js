export default {
  name: 'place',
  title: 'Место путешествия',
  type: 'document',
  fields: [
    {
      name: 'slug',
      title: 'уникальное имя поста(делается само)',
      type: 'slug',
      options: {
        source: '_id',
        maxLength: 200,
        slugify: input => input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace('drafts.', '')///[\s.,%]/g, Убирает точки
            .slice(0, 200)
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'rating',
      title: 'Рейтинг 1-10',
      type: 'number',
      validation: Rule => Rule.required().min(1).max(10)
    },
    {
      name: 'distance',
      title: 'Дистанция (km)',
      type: 'number',
      validation: Rule => Rule.required()
    },
    {
      name: 'duration',
      title: 'Продолжительность(число) + дней - (15 дней)',
      type: 'string',
      validation: Rule => Rule.required().min(1)
    },
    {
      name: 'description',
      title: 'Описание',
      type: 'blockContent',
      validation: Rule => Rule.required()
    },
    {
      name: 'imagePath',
      title: 'Путь картинки',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'location',
      title: 'Локация',
      type: 'object',
      fields: [
        {name: 'country', type: 'object', title: 'Country',
          fields:[
              {name: 'rus', type: 'string', title: 'Russian название страны', validation: Rule => Rule.required()},
              {name: 'eng', type: 'string', title: 'Eng страна для карты', validation: Rule => Rule.required()}
          ],
        },
        {name: 'city', type: 'string', title: 'City', validation: Rule => Rule.required()},
      ]
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
  ],

  preview: {
    select: {
      title: 'location.city',
      media: 'imagePath',
    },
  },
}
