export const servers = [
    {value: "british", label: "British"},
    {value: "inca", label: "Inca"},
    {value: "ottoman", label: "Ottoman"},
    {value: "roman", label: "Roman"},
    {value: "russian", label: "Russian"},
    {value: "french", label: "French"},
]

export const customStyles = {
    control: () => ({
        cursor: "pointer",
        border: "1px solid #c4d6dd",
        width: "100%",
        display: "flex",
        borderRadius: "4px",
        height: 45,
    }),
    option: (provided, state) => ({
        border: "1px solid #c4d6dd",
        cursor: "pointer",
        width: "100%",
        display: "flex",
        alignItems: "center",
        padding: "0 15px",
        marginBottom: "5px",
        borderRadius: "4px",
        height: 45,
        color: state.isSelected ? '#424863' : '#c4d6dd',
    }),
    menu: () => ({
        marginTop: "5px",
        backgroundColor: "transparent",
    }),
    menuList: () => ({
        backgroundColor: "transparent",
    })
}