const sequelize = require('../config/connection');
const { Comment, Post, User } = require('../models');

const commentSeedData = require('./commentSeedData.json');

const commentDatabase = async () => {
    await sequelize.sync({ force: true });

    const comments = await comment.bulkCreate(commentSeedData);

    for (const { id } of comments) {
        // Need to include a valid driver_id when creating a license
        const newComment = await User.create({
            comment_id: id,
        });
    }

    process.exit(0);
};

commentDatabase();