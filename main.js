
const cityOrder = ['Kiev', 'Prague', 'Zurich', 'Amsterdam', 'Barcelona', 'Berlin'];
const graph = { Kiev: ['Prague'], Prague: ['Kiev', 'Zurich', 'Kiev'], Zurich: ['Amsterdam'], Amsterdam: ['Barcelona', 'Berlin'], Barcelona: [], Berlin: ['Kiev', 'Berlin', 'Amsterdam']
};

function findTravelRoute(cities, routes) {
    function dfs(currentCity, visited, currentPath) {
        if (currentPath.length === cities.length - 1) {
            return currentPath;
        }

        for (let nextCity of routes[currentCity]) {
            if (!visited.has(nextCity)) {
                const newPath = dfs(nextCity, new Set([...visited, nextCity]), [...currentPath, nextCity]);
                if (newPath) {
                    return newPath;
                }
            }
        }

        return null;
    }

    return dfs(cities[0], new Set([cities[0]]), [cities[0]]);
}

console.log(findTravelRoute(cityOrder, graph));
