

function Loading(){
    return (
        <div className="flex flex-col bg-white items-center justify-center h-screen">
            <img 
              src="/img/logoLoading.png"
              alt="Logo"
               className="w-24  animate-bounce transform scale-125"
            />
            <div className="mt-4 text-xl font-semibold text-primary-color animate-pulse transform scale-125">
              Loading...
            </div>
          </div>
    );
}

export default Loading;