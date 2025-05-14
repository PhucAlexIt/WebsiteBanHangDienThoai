package vn.id.phonestore.config;

public class RestResponse<T>{
    private int status;
    private String error;
    private String message;
    private T data;

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public String getError() {
        return error;
    }

    public void setError(String error) {
        this.error = error;
    }

    public Object getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }
    public RestResponse<T> getSuccess(T data ){
        RestResponse<T> response = new RestResponse();
        response.setStatus(200);
        response.setData(data);
        response.setMessage("success");
        return response;
    }
}
