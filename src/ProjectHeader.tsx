type ProjectHeaderProps = {
    title: string;
    substring: string;
    tools?: string[];
}
export default function ProjectHeader({title, substring, tools} : ProjectHeaderProps) {
    return (
        <>
            <div className="content-header">
                <div className="header-text">
                    <h2>{title}</h2>

                </div>
                <div className="made-with-box">
                    made with:
                    {
                        tools !== undefined &&
                            tools.map((key, index) =>{
                                return(
                                    <>
                                    <img className="made-with-logo" src={"/images/logos/"+key+".png"}></img>
                                    </>
                                )
                            })
                    }
                    
                </div>
            </div>
            <hr />

            <div className='details'>
                {substring}
                <hr className="dt2" />
            </div>
        </>
    )
}
