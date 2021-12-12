/*******************************************************************************
 * This file is part of ReactionRoleBot, a role-assigning Discord bot.
 * Copyright (C) 2020 Mimickal (Mia Moretti).
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, version 3.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 ******************************************************************************/
const DISCORD_ID_MAX = 19;
const PERMS = 'perms';

exports.up = function(knex) {
	return knex.schema.createTable(PERMS, table => {
		table.string('guild_id', DISCORD_ID_MAX);
		table.string('role_id',  DISCORD_ID_MAX);

		table.primary(['guild_id', 'role_id']);
	});
};

exports.down = function(knex) {
	return knex.schema.dropTable(PERMS);
};

