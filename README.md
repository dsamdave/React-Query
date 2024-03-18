# React Query Tutorial   

> How to build a React App with React Query (Queries, Mutations, Query Invalidation...)   
 
## Author: Dev A.T Viet Nam   

## Youtube: https://youtu.be/YOJqrs2Ygvc    

## Getting started Demo: `npm install -> npm start`  

## 🔥 Donate   
> + 👉 Buy Me a Coffee . Thank You ! 💗 :   
> + 👉 https://www.buymeacoffee.com/QK1DkYS  
> + 👉 Paypal : https://paypal.me/tuananh251192  

### 👻👻VietNam:   
> + 👉Vietcombank: 0061001044348 (LE TUAN ANH)  
> + 👉Momo : 0374481936  


I. Requirements   
  - HTML, CSS, Javascript (DOM, ES6...)   

  - Reactjs:    
    + Videos tutorial: https://youtube.com/playlist?list=PLs4co9a6NhMzsm6Y5HCBFnlGkej1Dk3Yu   
    + Source code: https://github.com/devat-youtuber/React-Tutorial-2022/tree/25-useReducer   
  
  - RestAPI:   
    + Videos tutorial: https://youtube.com/playlist?list=PLs4co9a6NhMxrU8nqa4yHeXiUhVci-U3_   
    + Source code: https://github.com/devat-youtuber/RestfulAPI/tree/03-Paginate-Sort-Search-Filter  

II. Intro  
```
  1. React Query?     
    - What?      
      + A library for fetching data in a React application.        
      + Thư viện để tìm nạp dữ liệu trong ứng dụng React.   

    - Why?   
      + Since React is a UI library, there is no specific pattern for data fetching.   
      + useEffect hook for data fetching and useState hook to maintain component state like loading, error or data.  
      + If the data is need throughout the app, we tend to use state management libraries (Redux, Recoil, Zustand, React Context...)   
      + Most of the state management libraries are good for working with client-state.   
      + State management libraries are not great for working with asynchronous or server-state.  

      + Vì React là một thư viện UI nên không có một khuôn mẫu cụ thể nào cho việc tìm nạp dữ liệu.   
      + useEffect hook để tìm nạp dữ liệu và useState hook để duy trì trạng thái thành phần như loading, error or data.   
      + Nếu cần dữ liệu trong toàn bộ ứng dụng, chúng tôi có xu hướng sử dụng    các thư viện quản lý state (Redux, Recoil, Zustand, React Context...)     
      + Hầu hết State Management Libraries đều làm việc tốt với client-state.  
      + State Management Libraries không tuyệt vời để làm việc với asynchronous(bất dồng bộ) hoặc server-state.   

  2. Client vs server state?             
    - Client state.    
      + Persisted in your app memory and accessing or updating it is synchronous.
      + Vẫn còn trong bộ nhớ ứng dụng của bạn và việc truy cập hoặc cập nhật nó là đồng bộ.   

    - Server state.  
      + Persisted remotely and requires asynchronous APIs for fetching or updating.   
      + Has shared ownership.   
      + Data can be updated by someone else without your knowledge.    
      + UI data may not be in sync with the remote data.  
      + Challenging when you have to deal with caching, deduping multiple requests for the same data, updating stale data in the background, performance optimization etc.  

      + Được duy trì từ xa và yêu cầu các API không đồng bộ để tìm nạp hoặc cập nhật.  
      + Có quyền sở hữu chung.  
      + Dữ liệu có thể được cập nhật bởi người khác mà bạn không biết.   
      + Dữ liệu giao diện người dùng có thể không đồng bộ với dữ liệu từ xa.   
      + Thách thức khi bạn phải xử lý bộ nhớ đệm, sao lưu nhiều yêu cầu cho cùng một dữ liệu, cập nhật dữ liệu cũ trong nền, tối ưu hóa hiệu suất, v.v.   
```

III. What will we learn?  (Queries, Mutations, Query Invalidation)   
```     
  - QueryClientProvider      
  - ReactQueryDevtools        
  - Queries (useQuery)
  - Query Keys.
  - Query Functions.
  - Handling and Throwing Errors.
  - Parallel Queries (useQueries)
  - Dependent Queries.      
  - Window Focus Refetching.       
  - Disabling/Pausing Queries.       
  - Query Retries.
  - StaleTime.
  - KeepPreviousData.
  - Background Fetching Indicators.
  - Infinite Queries.
  - Placeholder Query Data.
  - Initial Query Data.
  - Prefetching.
  - Mutations (useMutation)
  - Query Invalidation
```
