class BlogsController < ApplicationController
  def index
  	@blogs = Blog.all
  end

  def create
  	@blog = Blog.new(blog_params)
  	if @blog.save
  		render json: @blog
  	else
  		render json: @blog.errors, status: :unprocessable_entity
  	end
  end

  def update
  	@blog = Blog.find(params[:id])
  	if @blog.update(blog_params)
  		render json: @blog
  	else
  		render json: @blog.errors, status: :unprocessable_entity
  	end
  end

  def destroy
  	@blog = Blog.find(params[:id])
  	@blog.destroy
  	head :no_content
  end

  private
  	def blog_params
  		params.require(:blog).permit(:name, :title, :content)
  	end

end
