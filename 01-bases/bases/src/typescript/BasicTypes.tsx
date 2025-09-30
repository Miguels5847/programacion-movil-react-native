export const BasicTypes = () => {
    const name: String = 'Miguel';
    const age: Number = 20;
    const isActive: Boolean = false;
    const projectos: String[] = ['Electronics Arts', 'Santander Bank', 'Favorita Corp'];
    return (
        <>
            <h3>Tipos Básicos: </h3>
            {name} - {age} - {isActive ? 'Active' : 'No Active'}
            <p>
                {projectos.join(' | ')}
            </p>
        </>
    )
}
