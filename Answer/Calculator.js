module.exports = class Calculator
{
    /**
     * Get the distance between 2 players, each player has a "location" property, compare the location properties and
     * return the distance between the two players.
     *
     * @note Player locations can be whole numbers or floats
     *
     * @param {Player} player1
     * @param {Player} player2
     *
     * @return {Number} The distance between the two players, this should be rounded to the nearest whole number
     */
    getDistanceBetweenPlayers(player1, player2)
    {
        const adjacent = Math.abs((player1.location.x - player2.location.x));
        const opposite = Math.abs((player1.location.y - player2.location.y));

        let hyp = (Math.pow(adjacent, 2) + Math.pow(opposite, 2));

        return Math.round(Math.sqrt(hyp));
    }
};
