(() => {
    function getMovieById(id: string) {
        console.log({ id });
    }

    function getMovieCastByMovieId(id: string) {
        console.log({ id });
    }

    function getActorBiographyById(id: string) {
        console.log({ id });
    }

    interface Movie {
        cast: Array<string>;
        description: string;
        rating: number;
        title: string;
    }

    function createMovie({
        title,
        description,
        rating,
        cast,
    }: Movie) {
        console.log({ title, description, rating, cast });
    }

    function createActor(fullName: string, birthDate: Date): boolean {
        // tarea asincrona para verificar nombre
        // ..
        // ..
        console.log('birthDate', birthDate);

        if (fullName === 'fernando') return false;

        console.log('Crear actor');
        return true;
    }

    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {
        if (isDead) return 1500;

        if (isSeparated) return 2500;

        if (isRetired) return 3000;

        return 4000;
    }
})();
