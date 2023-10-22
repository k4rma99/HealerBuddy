export const ProfileSide = () => {
    return (
        <div className="rounded-lg border bg-white px-4 pt-8 pb-10 shadow-lg">
            <div className="relative mx-auto w-36 rounded-full">
                <span className="absolute right-0 m-3 h-3 w-3 rounded-full bg-green-500 ring-2 ring-green-300 ring-offset-2" />
                <img
                    className="mx-auto h-auto w-full rounded-full"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                    alt=""
                />
            </div>
            <h1 className="my-1 text-center text-xl font-bold leading-8 text-gray-900">
                Michael Simbal
            </h1>
            <h3 className="font-lg text-semibold text-center leading-6 text-gray-600">
                Marketing Exec. at Denva Corp
            </h3>

            <ul className="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
                <li className="flex items-center py-3 text-sm">
                    <span>Status</span>
                    <span className="ml-auto">
                        <span className="rounded-full bg-green-200 py-1 px-2 text-xs font-medium text-green-700">
                            Active
                        </span>
                    </span>
                </li>
                <li className="flex items-center py-3 text-sm">
                    <span>Joined On</span>
                    <span className="ml-auto">Apr 08, 2022</span>
                </li>
            </ul>

            <div className="bg-gray-50 py-10 text-fi-midnight rounded-b">
                <div className="px-4">
                    <div className="border-b pb-4 border-gray-400 border-dashed">
                        <p className="text-xs font-light leading-3">9:00 AM</p>
                        <p className="text-lg font-medium leading-5 pt-2">Zoom call with design team</p>
                        <p className="text-sm pt-2 leading-4">Discussion on UX sprint and Wireframe review</p>
                    </div>
                    <div className="border-b pb-4 border-gray-400 border-dashed pt-5">
                        <p className="text-xs font-light leading-3">10:00 AM</p>
                        <p className="text-lg font-medium leading-5 pt-2">Orientation session with new hires</p>
                    </div>
                    <div className="border-b pb-4 border-gray-400 border-dashed pt-5">
                        <p className="text-xs font-light leading-3">9:00 AM</p>
                        <p className="text-lg font-medium leading-5 pt-2">Zoom call with design team</p>
                        <p className="text-sm pt-2 leading-4">Discussion on UX sprint and Wireframe review</p>
                    </div>
                </div>
            </div>
        </div>
    )
}